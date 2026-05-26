// ===== QUIZ DATA (22 câu, 8 phần) =====
// Trục: E=Estrogen/Progesterone, C=Cortisol, I=Insulin, T=Thyroid, D=Detox
const QUIZ = [
  // Phần 1 — Năng lượng
  { section:'⚡ Năng lượng', axis:'C', q:'Buổi sáng bạn thường cảm thấy thế nào?', hint:'Chọn mô tả sát nhất với bạn trong 3 tháng gần đây.',
    opts:['Tỉnh táo, sẵn sàng cho ngày mới','Hơi mệt nhưng dần tỉnh sau 30 phút','Mệt nặng dù ngủ đủ, cần cà phê mới hoạt động được','Kiệt sức hoàn toàn, không muốn rời khỏi giường'] },
  { section:'⚡ Năng lượng', axis:'C', q:'Năng lượng của bạn trong ngày thay đổi như thế nào?', hint:'',
    opts:['Đều và ổn định suốt ngày','Có vài lúc hơi xuống nhưng không đáng kể','Đỉnh cao buổi sáng, sụp đổ buổi chiều','Mệt liên tục hoặc thất thường không đoán được'] },

  // Phần 2 — Giấc ngủ
  { section:'🌙 Giấc ngủ', axis:'C', q:'Chất lượng giấc ngủ của bạn gần đây ra sao?', hint:'',
    opts:['Ngủ sâu, dễ vào giấc, sáng dậy khỏe','Đôi khi khó ngủ hoặc thỉnh thoảng tỉnh giữa đêm','Thường xuyên trằn trọc, tỉnh giữa đêm (1–3h sáng)','Mất ngủ mãn tính, ngủ ít dưới 5 tiếng'] },
  { section:'🌙 Giấc ngủ', axis:'C', q:'Bạn có hay thức đột ngột lúc 1–3 giờ sáng không?', hint:'Đây là dấu hiệu Cortisol cao ban đêm.',
    opts:['Không bao giờ','Hiếm khi (vài lần/tháng)','Thỉnh thoảng (1–2 lần/tuần)','Thường xuyên (gần như mỗi đêm)'] },

  // Phần 3 — Chu kỳ kinh
  { section:'🌸 Chu kỳ kinh', axis:'E', q:'Chu kỳ kinh của bạn có đều không?', hint:'',
    opts:['Đều, 26–32 ngày, ổn định','Thỉnh thoảng lệch vài ngày','Không đều, có thể lệch 1–2 tuần','Rất không đều hoặc mất kinh kéo dài'] },
  { section:'🌸 Chu kỳ kinh', axis:'E', q:'Bạn bị đau bụng kinh như thế nào?', hint:'',
    opts:['Không đau hoặc đau rất nhẹ','Khó chịu nhưng vẫn sinh hoạt được','Đau nhiều, cần thuốc giảm đau','Đau dữ dội, ảnh hưởng công việc và cuộc sống'] },
  { section:'🌸 Chu kỳ kinh', axis:'E', q:'Lượng máu kinh của bạn thường như thế nào?', hint:'',
    opts:['Vừa phải, ổn định 3–5 ngày','Hơi nhiều hoặc ít hơn bình thường một chút','Rất nhiều (thay băng mỗi 1–2h) hoặc rất ít','Có máu cục lớn hoặc đốm máu ngoài chu kỳ'] },

  // Phần 4 — PMS & Tâm trạng
  { section:'🧠 Tâm trạng & PMS', axis:'E', q:'Trước kỳ kinh bạn thường trải qua những gì?', hint:'Chọn mô tả đúng nhất.',
    opts:['Gần như không có PMS','Hơi cáu gắt hoặc mệt nhẹ','Cáu gắt nhiều, đau ngực, đầy bụng, khó kiểm soát cảm xúc','Trầm cảm, lo âu nặng, không thể làm việc bình thường'] },
  { section:'🧠 Tâm trạng & PMS', axis:'C', q:'Khả năng tập trung và trí nhớ của bạn thế nào?', hint:'',
    opts:['Sắc bén, tập trung tốt','Đôi khi mất tập trung nhẹ','Hay quên, khó tập trung kéo dài','Sương mù não (brain fog) nghiêm trọng, ảnh hưởng công việc'] },

  // Phần 5 — Cân nặng & Tiêu hóa
  { section:'⚖️ Cân nặng & Chuyển hóa', axis:'I', q:'Cân nặng của bạn thay đổi như thế nào dù ăn uống không đổi?', hint:'',
    opts:['Ổn định, không thay đổi nhiều','Tăng nhẹ (~1–2kg) dễ giảm lại','Tăng đáng kể, khó giảm dù cố gắng','Tăng liên tục, đặc biệt vùng bụng, không giảm được'] },
  { section:'⚖️ Cân nặng & Chuyển hóa', axis:'I', q:'Bạn thường cảm thấy thế nào sau bữa ăn?', hint:'',
    opts:['Thoải mái, no vừa, không buồn ngủ','Đôi khi hơi nặng nề','Thường buồn ngủ hoặc mệt sau ăn','Đầy hơi, khó tiêu, buồn ngủ gần như mọi bữa'] },
  { section:'⚖️ Cân nặng & Chuyển hóa', axis:'I', q:'Bạn có hay thèm ngọt hoặc tinh bột đột ngột không?', hint:'Đặc biệt vào chiều hoặc tối.',
    opts:['Không','Thỉnh thoảng','Thường xuyên, khó kiểm soát','Luôn cảm thấy thèm, không ăn được thì bực bội'] },

  // Phần 6 — Stress
  { section:'⚡ Stress & Hệ thần kinh', axis:'C', q:'Mức độ stress trong cuộc sống của bạn hiện tại?', hint:'',
    opts:['Ít stress, cảm thấy cân bằng','Stress vừa phải, vẫn kiểm soát được','Stress cao, thường xuyên căng thẳng','Stress mãn tính, cảm thấy kiệt sức hoàn toàn'] },
  { section:'⚡ Stress & Hệ thần kinh', axis:'C', q:'Khi có chuyện xảy ra, bạn mất bao lâu để bình tĩnh trở lại?', hint:'',
    opts:['Vài phút, tôi phục hồi nhanh','30 phút đến 1 tiếng','Vài tiếng hoặc cả ngày','Cả ngày đến vài ngày, ảnh hưởng giấc ngủ'] },

  // Phần 7 — Gan & Thải độc
  { section:'🌿 Gan & Thải độc', axis:'D', q:'Da của bạn thế nào trong thời gian gần đây?', hint:'',
    opts:['Sáng, đều màu, ít mụn','Đôi khi nổi mụn nhỏ hoặc da hơi xỉn','Mụn nang tái phát, da sạm hoặc nổi vết nâu','Mụn nặng mãn tính, vàng da nhẹ hoặc ngứa thường xuyên'] },
  { section:'🌿 Gan & Thải độc', axis:'D', q:'Tiêu hóa và đi vệ sinh của bạn ra sao?', hint:'',
    opts:['Đều đặn mỗi ngày, không khó chịu','Đôi khi táo bón hoặc lỏng nhẹ','Táo bón hoặc tiêu chảy thường xuyên (3+ lần/tuần)','Đau bụng mãn tính, đầy hơi nặng, rất khó đi ngoài'] },
  { section:'🌿 Gan & Thải độc', axis:'D', q:'Bạn có nhạy cảm với mùi hóa chất, nước hoa hoặc rượu không?', hint:'Gan yếu thường biểu hiện qua nhạy cảm hóa chất.',
    opts:['Không đặc biệt nhạy cảm','Hơi nhạy với mùi mạnh','Nhạy cảm với nhiều mùi, dễ đau đầu khi tiếp xúc','Rất nhạy cảm, ngay cả lượng nhỏ cũng gây khó chịu'] },

  // Phần 8 — Tuyến giáp
  { section:'🦋 Tuyến giáp', axis:'T', q:'Nhiệt độ cơ thể bạn thế nào?', hint:'Tuyến giáp ảnh hưởng trực tiếp đến điều hòa thân nhiệt.',
    opts:['Bình thường, không đặc biệt lạnh hay nóng','Hơi lạnh tay chân vào mùa đông','Luôn lạnh bàn tay chân dù thời tiết ấm','Lạnh toàn thân ngay cả trong phòng điều hòa'] },
  { section:'🦋 Tuyến giáp', axis:'T', q:'Tóc và móng tay của bạn ra sao?', hint:'',
    opts:['Tóc dày khỏe, móng cứng bình thường','Tóc rụng nhẹ hơn bình thường, móng hơi giòn','Rụng tóc thành từng mảng, móng dễ gãy','Rụng nhiều, tóc thưa rõ rệt, móng không mọc được'] },
  { section:'🦋 Tuyến giáp', axis:'T', q:'Nhịp tim và huyết áp của bạn có hay thay đổi bất thường không?', hint:'',
    opts:['Bình thường, ổn định','Đôi khi hơi chậm hoặc hơi nhanh','Nhịp tim thường chậm hoặc thường nhanh bất thường','Thường xuyên hồi hộp, tim đập bất quy tắc'] },
  { section:'🦋 Tuyến giáp', axis:'T', q:'Sức mạnh cơ bắp và khả năng phục hồi sau vận động?', hint:'',
    opts:['Tốt, phục hồi nhanh sau tập','Hơi đau cơ lâu hơn bình thường','Hay đau cơ không rõ lý do, mệt sau vận động nhẹ','Yếu cơ rõ rệt, không chịu được vận động nhẹ'] },
];

// ===== SCORING CONFIG =====
const AXES = [
  { key:'E', label:'Hormone Kinh nguyệt',    icon:'fa-moon',     desc:'Estrogen & Progesterone' },
  { key:'C', label:'Trục Stress',              icon:'fa-wind',     desc:'Cortisol & Thần kinh' },
  { key:'I', label:'Năng lượng & Đường huyết', icon:'fa-bolt',     desc:'Insulin & Chuyển hóa' },
  { key:'T', label:'Tuyến giáp',               icon:'fa-spa',      desc:'Thyroid' },
  { key:'D', label:'Thải độc & Tiêu hóa',     icon:'fa-seedling', desc:'Gan & Detox' },
];

const DOMINANT_INFO = {
  E: {
    title: 'Mất cân bằng Estrogen / Progesterone',
    desc: 'Đây là trục chịu ảnh hưởng nhiều nhất của bạn. Rối loạn chu kỳ, PMS nặng và đau bụng kinh thường xuất phát từ đây. Điều tốt là trục này phản ứng rất nhanh với thay đổi lối sống đúng hướng.',
  },
  C: {
    title: 'Cortisol mãn tính — trục stress bị quá tải',
    desc: 'Hệ thần kinh của bạn đang ở chế độ "sống còn" quá lâu. Cortisol cao phá vỡ toàn bộ hệ hormone khác. Phục hồi trục này là bước đầu tiên quan trọng nhất.',
  },
  I: {
    title: 'Kháng Insulin & rối loạn đường huyết',
    desc: 'Cơn thèm ngọt, mệt sau ăn và mỡ bụng khó giảm là tín hiệu rõ. Kháng insulin âm thầm ảnh hưởng mọi hormone khác và thường bị bỏ sót trong xét nghiệm thông thường.',
  },
  T: {
    title: 'Tuyến giáp cần được chú ý',
    desc: 'Lạnh tay chân, rụng tóc và mệt mỏi mãn tính thường liên quan đến tuyến giáp hoạt động kém. Đây là "nhà máy điều phối" mọi chức năng cơ thể.',
  },
  D: {
    title: 'Gan & hệ thải độc đang quá tải',
    desc: 'Gan là "nhà máy xử lý hormone". Khi gan quá tải, Estrogen dư thừa không được thải loại, gây PMS nặng hơn, mụn và mỡ bụng. Hỗ trợ gan là bước không thể thiếu.',
  },
};

// ===== STATE =====
let qIdx = 0;
let answers = {}; // { qIdx: scoreValue (0–3) }

// ===== OPEN / CLOSE =====
function openQuizModal() {
  document.body.style.overflow = 'hidden';
  const overlay = document.getElementById('quizOverlay');
  if (overlay) overlay.classList.add('open');
  resetQuiz();
}

function closeQuizModal() {
  const overlay = document.getElementById('quizOverlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function retakeQuiz() {
  resetQuiz();
  startQuiz();
}

function resetQuiz() {
  qIdx = 0; 
  answers = {};
  
  document.getElementById('quizIntro').style.display = 'block';
  document.getElementById('quizQuestionArea').style.display = 'none';
  document.getElementById('quizLeadCapture').style.display = 'none';
  document.getElementById('quizResultScreen').classList.remove('visible');
  
  const modalContainer = document.getElementById('quizModal');
  if (modalContainer) modalContainer.scrollTop = 0;
}

function startQuiz() {
  document.getElementById('quizIntro').style.display = 'none';
  document.getElementById('quizQuestionArea').style.display = 'block';
  document.getElementById('quizLeadCapture').style.display = 'none';
  renderQuestion();
}

// ===== RENDER =====
function renderQuestion() {
  const q = QUIZ[qIdx];
  const total = QUIZ.length;
  const pct = Math.round((qIdx / total) * 100);

  const fill = document.getElementById('quizProgressFill');
  const progressLabel = document.getElementById('quizProgressLabel');
  const sectionLabel = document.getElementById('quizSectionLabel');
  const qScreen = document.getElementById('quizQScreen');
  const nextBtn = document.getElementById('quizNextBtn');
  const backBtn = document.getElementById('quizBackBtn');

  if (fill) fill.style.width = pct + '%';
  if (progressLabel) progressLabel.textContent = `Câu ${qIdx + 1} / ${total}`;
  if (sectionLabel) sectionLabel.textContent = q.section;

  const letters = ['A','B','C','D'];
  const selected = answers[qIdx] !== undefined ? answers[qIdx] : -1;

  if (qScreen) {
    qScreen.innerHTML = `
      <div class="quiz-section-label">${q.section}</div>
      <div class="quiz-question-text">${q.q}</div>
      ${q.hint ? `<div class="quiz-question-hint">${q.hint}</div>` : ''}
      <div class="quiz-options">
        ${q.opts.map((o, i) => `
          <button class="quiz-option-btn${selected === i ? ' selected' : ''}"
            onclick="selectAnswer(${i})">
            <span class="quiz-option-letter">${letters[i]}</span>
            ${o}
          </button>`).join('')}
      </div>`;
  }

  if (nextBtn) {
    nextBtn.disabled = selected === -1;
    nextBtn.innerHTML = qIdx < total - 1 
      ? 'Tiếp theo <i class="fas fa-arrow-right"></i>' 
      : 'Xem kết quả <i class="fas fa-chart-bar"></i>';
  }
  
  if (backBtn) {
    backBtn.style.display = qIdx > 0 ? 'block' : 'none';
  }
  
  const modalContainer = document.getElementById('quizModal');
  if (modalContainer) modalContainer.scrollTop = 0;
}

function selectAnswer(i) {
  answers[qIdx] = i;
  document.querySelectorAll('.quiz-option-btn').forEach((b, idx) => {
    b.classList.toggle('selected', idx === i);
    const dot = b.querySelector('.quiz-option-letter');
    if (dot) {
      if (idx === i) { 
        dot.style.background='var(--accent-terracotta)'; 
        dot.style.borderColor='var(--accent-terracotta)'; 
        dot.style.color='#fff'; 
      } else { 
        dot.style.background=''; 
        dot.style.borderColor=''; 
        dot.style.color=''; 
      }
    }
  });
  const nextBtn = document.getElementById('quizNextBtn');
  if (nextBtn) nextBtn.disabled = false;
}

function quizNext() {
  if (answers[qIdx] === undefined) return;
  if (qIdx < QUIZ.length - 1) {
    qIdx++;
    renderQuestion();
  } else {
    showLeadCaptureForm();
  }
}

function quizBack() {
  if (qIdx > 0) { 
    qIdx--; 
    renderQuestion(); 
  }
}

function showLeadCaptureForm() {
  document.getElementById('quizQuestionArea').style.display = 'none';
  const leadCapture = document.getElementById('quizLeadCapture');
  leadCapture.style.display = 'block';
  
  // Pre-populate if they already filled it previously
  const savedName = localStorage.getItem('f5_quiz_lead_name') || '';
  const savedEmail = localStorage.getItem('f5_quiz_lead_email') || '';
  const savedPhone = localStorage.getItem('f5_quiz_lead_phone') || '';
  
  const nameInput = document.getElementById('quizLeadName');
  const emailInput = document.getElementById('quizLeadEmail');
  const phoneInput = document.getElementById('quizLeadPhone');
  
  if (nameInput) nameInput.value = savedName;
  if (emailInput) emailInput.value = savedEmail;
  if (phoneInput) phoneInput.value = savedPhone;
  
  // Reset submit button state
  const submitBtn = document.querySelector('.quiz-lead-submit-btn');
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Xem phân tích của tôi <i class="fas fa-arrow-right"></i>';
  }
  
  const modalContainer = document.getElementById('quizModal');
  if (modalContainer) modalContainer.scrollTop = 0;
}

async function submitQuizLead(e) {
  e.preventDefault();
  
  const name = document.getElementById('quizLeadName').value.trim();
  const email = document.getElementById('quizLeadEmail').value.trim();
  const phone = document.getElementById('quizLeadPhone').value.trim();
  
  if (!name || !email || !phone) return;
  
  const submitBtn = document.querySelector('.quiz-lead-submit-btn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang phân tích...';
  }
  
  // Save to global booking state if it exists
  if (window.state) {
    window.state.name = name;
    window.state.email = email;
    window.state.phone = phone;
  }
  
  // Save to localStorage so they don't have to fill it again if they retake
  localStorage.setItem('f5_quiz_lead_name', name);
  localStorage.setItem('f5_quiz_lead_email', email);
  localStorage.setItem('f5_quiz_lead_phone', phone);
  
  const scores = calcScores();
  let scoreSummary = '';
  AXES.forEach(a => {
    const s = scores[a.key];
    const c = getColor(s);
    scoreSummary += `${a.label}: ${s}% (${c.word})\n`;
  });
  
  const avgScore = Math.round(Object.values(scores).reduce((a,b)=>a+b,0) / AXES.length);
  const overall = getColor(avgScore);
  
  // Send via EmailJS
  const templateParams = {
    to_email: 'ngocanhnt.hormone@gmail.com', // owner email
    from_name: name,
    from_email: email,
    phone: phone,
    goal: `Hoàn thành Hormone Quiz (${overall.label})`,
    problem: `Bản đồ Hormone của khách hàng:\n${scoreSummary}\nĐiểm trung bình mất cân bằng: ${avgScore}%`,
    booking_date: 'Chưa đặt lịch (Mới hoàn thành Quiz)',
    reply_to: email
  };
  
  try {
    if (typeof emailjs !== 'undefined') {
      const serviceId = window.EMAILJS_SERVICE_ID || 'service_u8oh9bo';
      const templateId = window.EMAILJS_TEMPLATE_ID || 'template_vzagfpy';
      await emailjs.send(serviceId, templateId, templateParams);
    }
  } catch (err) {
    console.error('EmailJS Quiz Lead Error:', err);
  }
  
  // Go to results!
  document.getElementById('quizLeadCapture').style.display = 'none';
  showResults();
}

// ===== SCORING =====
function calcScores() {
  const raw = { E:0, C:0, I:0, T:0, D:0 };
  const count = { E:0, C:0, I:0, T:0, D:0 };
  QUIZ.forEach((q, i) => {
    const ans = answers[i] ?? 0;
    raw[q.axis] += ans;
    count[q.axis]++;
  });
  // Normalize 0–100 (higher = worse)
  const scores = {};
  AXES.forEach(a => {
    const max = (count[a.key] || 1) * 3;
    scores[a.key] = Math.round((raw[a.key] / max) * 100);
  });
  return scores;
}

function getColor(score) {
  if (score <= 25) return { grade:'green',  label:'Cân bằng tốt',    word:'Ổn định' };
  if (score <= 50) return { grade:'yellow', label:'Mất cân bằng nhẹ', word:'Mất cân bằng nhẹ' };
  if (score <= 75) return { grade:'orange', label:'Cần chú ý nhiều', word:'Cần chú ý' };
  return { grade:'red',    label:'Cần can thiệp',  word:'Mất cân bằng sâu' };
}

// ===== SHOW RESULTS =====
function showResults() {
  document.getElementById('quizQuestionArea').style.display = 'none';
  const rs = document.getElementById('quizResultScreen');
  rs.classList.add('visible');
  document.getElementById('quizModal').scrollTop = 0;

  const scores = calcScores();
  const avgScore = Math.round(Object.values(scores).reduce((a,b)=>a+b,0) / AXES.length);
  const overall  = getColor(avgScore);

  // Grade badge
  const badge = document.getElementById('resultGradeBadge');
  if (badge) {
    badge.className = `result-grade-badge grade-${overall.grade}`;
    const gradeLabels = {
      green:  '🌿 Hormone khá cân bằng',
      yellow: '⚠️ Bắt đầu mất cân bằng',
      orange: '🔥 Mất cân bằng rõ rệt',
      red:    '🚨 Cần can thiệp ngay',
    };
    badge.textContent = gradeLabels[overall.grade];
  }

  const headlines = {
    green:  'Cơ thể bạn đang khá ổn — nhưng vẫn có điểm cần tối ưu',
    yellow: 'Cơ thể đang gửi tín hiệu — đây là lúc lắng nghe',
    orange: 'Hormone của bạn đang mất cân bằng ở nhiều trục',
    red:    'Cơ thể bạn đang kêu cứu — cần hành động sớm',
  };
  const resultHeadline = document.getElementById('resultHeadline');
  if (resultHeadline) resultHeadline.textContent = headlines[overall.grade];
  
  const resultSubline = document.getElementById('resultSubline');
  if (resultSubline) {
    resultSubline.textContent = 'Dưới đây là bản đồ hormone cá nhân hóa của bạn — dựa trên 22 câu trả lời vừa rồi.';
  }

  // ===== GAUGE CARDS =====
  const R = 28; // radius
  const CIRC = 2 * Math.PI * R; // circumference ≈ 175.9

  const barsEl = document.getElementById('hormoneBars');
  if (barsEl) {
    barsEl.className = 'gauge-grid';
    // Remove old legend and tabs/body if exists (prevent duplicate on retake)
    const oldLegend = document.querySelector('.gauge-legend');
    if (oldLegend) oldLegend.remove();
    document.querySelector('.result-tabs')?.remove();
    document.getElementById('bodyHeatmapWrap')?.remove();

    // Inject tabs right before the legend/barsEl
    const tabsHtml = `
      <div class="result-tabs">
        <button class="result-tab-btn active" id="tab-gauge" onclick="switchResultTab('gauge')">5 Trục Hormone</button>
        <button class="result-tab-btn" id="tab-body" onclick="switchResultTab('body')">Bản Đồ Cơ Thể</button>
      </div>
    `;
    barsEl.insertAdjacentHTML('beforebegin', tabsHtml);

    // Inject legend
    barsEl.insertAdjacentHTML('beforebegin',
      `<p class="gauge-legend">Cơ thể bạn đang ở đâu? <span class="gl-green">Ổn định</span> <span class="gl-arrow">→</span> <span class="gl-yellow">Mất cân bằng nhẹ</span> <span class="gl-arrow">→</span> <span class="gl-orange">Cần chú ý</span> <span class="gl-arrow">→</span> <span class="gl-red">Mất cân bằng sâu</span></p>`);

    // Populate gauges
    barsEl.innerHTML = AXES.map(a => {
      const s      = scores[a.key];
      const c      = getColor(s);
      const offset = CIRC;
      return `
        <div class="gauge-card">
          <div class="gauge-svg-wrap">
            <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
              <circle class="gauge-bg"   cx="36" cy="36" r="${R}"/>
              <circle class="gauge-fill g-${c.grade}" cx="36" cy="36" r="${R}"
                id="gauge_${a.key}"
                stroke-dasharray="${CIRC}"
                stroke-dashoffset="${offset}"/>
            </svg>
            <div class="gauge-score-label g-word-${c.grade}" id="gaugeLabel_${a.key}">${c.word}</div>
          </div>
          <div class="gauge-axis-icon"><i class="fas ${a.icon}"></i></div>
          <div class="gauge-axis-name">${a.label}</div>
          <div class="gauge-pct" id="gaugePct_${a.key}">— % mất cân bằng</div>
        </div>`;
    }).join('');

    // Inject body heatmap right after barsEl
    const bodyMapHtml = renderBodyMap(scores);
    barsEl.insertAdjacentHTML('afterend', bodyMapHtml);

    // Animate gauges after paint
    requestAnimationFrame(() => {
      setTimeout(() => {
        AXES.forEach(a => {
          const s   = scores[a.key];
          const el  = document.getElementById('gauge_' + a.key);
          const pct = document.getElementById('gaugePct_' + a.key);
          if (!el) return;
          el.style.strokeDashoffset = CIRC * (1 - s / 100);
          
          // Animate % counter
          let current = 0;
          const step  = Math.ceil(s / 30) || 1;
          const timer = setInterval(() => {
            current = Math.min(current + step, s);
            if (pct) pct.textContent = current + '% mất cân bằng';
            if (current >= s) clearInterval(timer);
          }, 35);
        });
      }, 80);
    });
  }

  // Dominant axis (highest score = most imbalanced)
  const dominant = AXES.reduce((prev, cur) => scores[cur.key] > scores[prev.key] ? cur : prev);
  
  const dominantTitle = document.getElementById('dominantTitle');
  if (dominantTitle) dominantTitle.textContent = DOMINANT_INFO[dominant.key].title;
  
  const dominantDesc = document.getElementById('dominantDesc');
  if (dominantDesc) dominantDesc.textContent = DOMINANT_INFO[dominant.key].desc;

  // CTA Text updates
  const ctaEyebrow = document.getElementById('resultCtaEyebrow');
  if (ctaEyebrow) {
    ctaEyebrow.textContent = `Ngọc Anh đọc kết quả của bạn trước buổi call — để buổi nói chuyện tập trung đúng vào ${dominant.label}.`;
  }
  
  const ctaText = document.getElementById('resultCtaText');
  if (ctaText) {
    ctaText.textContent = `Nói chuyện về ${dominant.label} với Ngọc Anh`;
  }
}

// ===== BODY HEATMAP =====
const ZONE_MAP = {
  C: { cx:60, cy:26,  rx:23, ry:24, zoneLabel:'Vùng đầu não — stress & cortisol' },
  T: { cx:60, cy:60,  rx:14, ry:10, zoneLabel:'Vùng cổ họng — tuyến giáp' },
  I: { cx:60, cy:172, rx:30, ry:22, zoneLabel:'Vùng bụng giữa — insulin & đường huyết' },
  D: { cx:60, cy:207, rx:27, ry:17, zoneLabel:'Vùng gan — thải độc & tiêu hóa' },
  E: { cx:60, cy:248, rx:30, ry:19, zoneLabel:'Vùng khung chậu — hormone kinh nguyệt' },
};
const ZONE_COLORS = { green:'#2D8C5E', yellow:'#D4A017', orange:'#BF5E3B', red:'#C0392B' };

function renderBodyMap(scores) {
  const dominant = AXES.reduce((p,c) => scores[c.key] > scores[p.key] ? c : p);
  const zones = AXES.map(a => {
    const c = getColor(scores[a.key]);
    const z = ZONE_MAP[a.key];
    const isDom = a.key === dominant.key;
    return `<ellipse cx="${z.cx}" cy="${z.cy}" rx="${z.rx}" ry="${z.ry}"
      fill="${ZONE_COLORS[c.grade]}" opacity="0.55"
      class="body-zone${isDom ? ' zone-dominant' : ''}"/>`;
  }).join('');

  const legend = AXES.map(a => {
    const s = scores[a.key];
    const c = getColor(s);
    const z = ZONE_MAP[a.key];
    return `<div class="bzl-row">
      <div class="bzl-dot g-${c.grade}"></div>
      <div>
        <span class="bzl-name">${a.label}</span>
        <span class="bzl-zone-label">${z.zoneLabel}</span>
        <span class="bzl-status g-${c.grade}">${c.word} · ${s}%</span>
      </div>
    </div>`;
  }).join('');

  const BG = '#F7EDE3', STR = '#D4B098';
  return `<div class="body-heatmap-wrap" id="bodyHeatmapWrap">
    <div class="body-svg-col">
      <svg viewBox="0 0 120 340" xmlns="http://www.w3.org/2000/svg">
        <g fill="${BG}" stroke="${STR}" stroke-width="1.2">
          <ellipse cx="60" cy="26" rx="24" ry="26"/>
          <rect x="52" y="50" width="16" height="16" rx="3"/>
          <path d="M16,66 Q6,82 8,135 L12,215 Q12,232 60,232 Q108,232 108,215 L112,135 Q114,82 104,66 Q86,57 60,57 Q34,57 16,66Z"/>
          <path d="M18,68 Q4,105 6,158 L18,162 Q20,112 30,82Z"/>
          <path d="M102,68 Q116,105 114,158 L102,162 Q100,112 90,82Z"/>
          <path d="M12,215 Q4,252 8,278 L60,282 L112,278 Q116,252 108,215 Q88,232 60,232 Q32,232 12,215Z"/>
          <path d="M10,274 Q6,308 8,336 L38,336 Q40,308 42,274Z"/>
          <path d="M78,274 Q80,308 82,336 L112,336 Q114,308 110,274Z"/>
        </g>
        ${zones}
        <g fill="none" stroke="${STR}" stroke-width="0.8" opacity="0.4">
          <ellipse cx="60" cy="26" rx="24" ry="26"/>
        </g>
      </svg>
    </div>
    <div class="body-zone-legend">${legend}</div>
  </div>`;
}

function switchResultTab(tab) {
  const gaugeEl  = document.getElementById('hormoneBars');
  const bodyEl   = document.getElementById('bodyHeatmapWrap');
  const legendEl = document.querySelector('.gauge-legend');
  
  document.querySelectorAll('.result-tab-btn').forEach(b => b.classList.remove('active'));
  const activeTabBtn = document.getElementById('tab-' + tab);
  if (activeTabBtn) activeTabBtn.classList.add('active');
  
  if (tab === 'gauge') {
    if (gaugeEl)  gaugeEl.style.display = '';
    if (legendEl) legendEl.style.display = '';
    if (bodyEl)   bodyEl.style.display = 'none';
  } else {
    if (gaugeEl)  gaugeEl.style.display = 'none';
    if (legendEl) legendEl.style.display = 'none';
    if (bodyEl)   bodyEl.style.display = 'flex';
  }
}

function saveResultText() {
  const scores = calcScores();
  let txt = '=== BẢN ĐỒ HORMONE CỦA BẠN — F5 Hormone ===\n\n';
  AXES.forEach(a => {
    const s = scores[a.key];
    const c = getColor(s);
    txt += `${a.label}: ${s}% (${c.word})\n`;
  });
  txt += '\nĐể hiểu sâu hơn, đặt lịch Discovery Call miễn phí với cố vấn tại: https://huyenluu-functionalhealthadvisor.youcanbook.me/';
  const blob = new Blob([txt], {type:'text/plain;charset=utf-8'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; 
  a.download = 'hormone-map-f5.txt'; 
  a.click();
  URL.revokeObjectURL(url);
}

// Close and click events bindings
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeQuizModal(); });
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('quizOverlay');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === this) closeQuizModal();
    });
  }
});
