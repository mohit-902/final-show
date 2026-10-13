/**
 * MOHIT RAJPUROHIT - PERSONAL PORTFOLIO JAVASCRIPT
 * Interactive controls: Navigation, Active Spy, Form Handling, Toast Notifications
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation & Scroll Effects
  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.querySelector('.footer-back-to-top');

  // Sticky Navbar background on scroll
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile Menu Toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. Active Section Highlighting (ScrollSpy)
  const sections = document.querySelectorAll('section[id]');
  const highlightActiveSection = () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightActiveSection, { passive: true });

  // 3. Smooth Scroll for Back To Top
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 4. Toast Notification Utility
  const toast = document.getElementById('toastNotice');
  let toastTimeout;

  const showToast = (message) => {
    if (!toast) return;
    const toastMsg = toast.querySelector('.toast-message');
    if (toastMsg) toastMsg.textContent = message;
    
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };

  // 5. Copy Email to Clipboard
  const copyEmailButtons = document.querySelectorAll('[data-copy-email]');
  copyEmailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-copy-email') || 'mohitrajpurohit460@gmail.com';

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email)
          .then(() => {
            showToast('Email address copied to clipboard!');
          })
          .catch(() => {
            fallbackCopyText(email);
          });
      } else {
        fallbackCopyText(email);
      }
    });
  });

  const fallbackCopyText = (text) => {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast('Email address copied to clipboard!');
    } catch (err) {
      window.location.href = `mailto:${text}`;
    }
    document.body.removeChild(tempInput);
  };

  // 6. Contact Form Submission Handling
  const contactForm = document.getElementById('portfolioContactForm');
  const formAlert = document.getElementById('formSuccessAlert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = contactForm.querySelector('#senderName')?.value.trim();
      const email = contactForm.querySelector('#senderEmail')?.value.trim();
      const subject = contactForm.querySelector('#senderSubject')?.value.trim() || 'Portfolio Contact Inquiry';
      const message = contactForm.querySelector('#senderMessage')?.value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.');
        return;
      }

      // Show immediate feedback
      if (formAlert) {
        formAlert.style.display = 'flex';
      }

      // Prepare native mailto fallback for direct client sending
      const mailtoUrl = `mailto:mohitrajpurohit460@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Mohit,\n\n${message}\n\nFrom: ${name} (${email})`)}`;

      showToast('Opening your email client to send message...');

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 700);

      contactForm.reset();
    });
  }

  // 7. Update Footer Year
  const yearElem = document.getElementById('currentYear');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }

  // 8. Subtle Scroll Reveal Animations for Cards and Headers
  const revealElements = document.querySelectorAll('.glass-card, .section-header');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      revealObserver.observe(el);
    });
  }
});
