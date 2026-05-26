const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 3000;
const ROOT_DIR = __dirname;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Helper to replace postsData array in a file
function updateFilePostsData(filePath, newPostsData, variableDeclaration) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const startIdx = content.indexOf(variableDeclaration);
    if (startIdx !== -1) {
      const arrStartIdx = startIdx + variableDeclaration.length - 1; // pointing to '['
      let depth = 0;
      let endIdx = -1;
      for (let i = arrStartIdx; i < content.length; i++) {
        if (content[i] === '[') depth++;
        else if (content[i] === ']') {
          depth--;
          if (depth === 0) {
            endIdx = i;
            break;
          }
        }
      }
      if (endIdx !== -1) {
        // Prettify array string
        const newArrStr = '[\n' + newPostsData.map(p => `      {
        id: '${p.id}',
        title: '${p.title.replace(/'/g, "\\'")}',
        excerpt: '${p.excerpt.replace(/'/g, "\\'")}',
        category: '${p.category}',
        date: '${p.date}',
        url: 'posts/${p.id}.html'
      }`).join(',\n') + '\n    ]';

        const updatedContent = content.substring(0, arrStartIdx) + newArrStr + content.substring(endIdx + 1);
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        return true;
      }
    }
  } catch (err) {
    console.error(`Error updating postsData in ${filePath}:`, err);
  }
  return false;
}

const server = http.createServer((req, res) => {
  // Add CORS headers for local development if needed
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API Route: Check server connection status
  if (req.method === 'GET' && req.url === '/api/check') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  // API Route: Save post
  if (req.method === 'POST' && req.url === '/api/save') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { slug, htmlContent, postsData } = JSON.parse(body);
        if (!slug || !htmlContent || !postsData) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing slug, htmlContent, or postsData' }));
          return;
        }

        // 1. Write the new post file
        const postsDir = path.join(ROOT_DIR, 'kien-thuc', 'posts');
        if (!fs.existsSync(postsDir)) {
          fs.mkdirSync(postsDir, { recursive: true });
        }
        const postPath = path.join(postsDir, `${slug}.html`);
        fs.writeFileSync(postPath, htmlContent, 'utf8');

        // 2. Update index.html array
        const indexHtmlPath = path.join(ROOT_DIR, 'kien-thuc', 'index.html');
        updateFilePostsData(indexHtmlPath, postsData, 'const postsData = [');

        // 3. Update admin.html array (so server file stays synchronized)
        const adminHtmlPath = path.join(ROOT_DIR, 'kien-thuc', 'admin.html');
        updateFilePostsData(adminHtmlPath, postsData, 'let postsData = [');

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (err) {
        console.error('API Save Error:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // API Route: Delete post
  if (req.method === 'POST' && req.url === '/api/delete') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { slug, postsData } = JSON.parse(body);
        if (!slug || !postsData) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing slug or postsData' }));
          return;
        }

        // 1. Delete post file if it exists
        const postPath = path.join(ROOT_DIR, 'kien-thuc', 'posts', `${slug}.html`);
        if (fs.existsSync(postPath)) {
          fs.unlinkSync(postPath);
        }

        // 2. Update index.html array
        const indexHtmlPath = path.join(ROOT_DIR, 'kien-thuc', 'index.html');
        updateFilePostsData(indexHtmlPath, postsData, 'const postsData = [');

        // 3. Update admin.html array
        const adminHtmlPath = path.join(ROOT_DIR, 'kien-thuc', 'admin.html');
        updateFilePostsData(adminHtmlPath, postsData, 'let postsData = [');

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (err) {
        console.error('API Delete Error:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // Static File Server
  let filePath = path.join(ROOT_DIR, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
  
  // Security check to prevent traversing above root directory
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403);
    res.end('Access Denied');
    return;
  }

  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('File Not Found');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}/kien-thuc/admin.html`;
  console.log(`\n=============================================================`);
  console.log(`[F5 HORMONE CMS SERVER ACTIVE]`);
  console.log(`Server đang chạy tại: http://localhost:${PORT}`);
  console.log(`Đang mở Bảng quản trị: ${url}`);
  console.log(`Nhấn Ctrl+C để dừng server.`);
  console.log(`=============================================================\n`);

  // Auto-open browser on macOS
  exec(`open "${url}"`);
});
