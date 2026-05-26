// FAQ Accordion Interactivity
document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');
      
      // Close all other FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Toggle current item
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });

  // Sticky Bottom Registration Bar Visibility
  const stickyBar = document.getElementById('stickyBar');
  const heroSection = document.querySelector('.sales-hero');

  if (stickyBar && heroSection) {
    window.addEventListener('scroll', () => {
      // Show sticky bar after user scrolls past the hero section
      const heroHeight = heroSection.offsetHeight;
      if (window.scrollY > heroHeight) {
        stickyBar.classList.add('visible');
      } else {
        stickyBar.classList.remove('visible');
      }
    });
  }

  // Smooth Scroll for CTAs
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.reveal-item');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  }
});

// Collapsible "Read More" logic
document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.readmore-container');
  containers.forEach(container => {
    const btn = container.querySelector('.btn-readmore');
    const content = container.querySelector('.readmore-content');
    if (!btn || !content) return;
    
    const collapsedHeight = parseInt(container.getAttribute('data-collapsed-height') || '380', 10);
    content.style.maxHeight = collapsedHeight + 'px';
    
    const collapsedText = btn.innerHTML;
    const expandedText = 'Thu gọn <i class="fas fa-chevron-up"></i>';
    
    btn.addEventListener('click', () => {
      const isExpanded = container.classList.contains('expanded');
      if (isExpanded) {
        container.classList.remove('expanded');
        content.style.maxHeight = collapsedHeight + 'px';
        btn.innerHTML = collapsedText;
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        container.classList.add('expanded');
        content.style.maxHeight = content.scrollHeight + 'px';
        btn.innerHTML = expandedText;
        
        content.addEventListener('transitionend', function handler() {
          if (container.classList.contains('expanded')) {
            content.style.maxHeight = 'none';
          }
          content.removeEventListener('transitionend', handler);
        });
      }
    });
  });
});


