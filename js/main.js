/**
 * BeeFit Coaching Website – main.js
 * Features: Sticky nav, scroll animations, counters,
 *           gallery lightbox, form handling, back-to-top
 */

'use strict';

/* ── CONFIG ── */
const CONFIG = {
  whatsapp: '33600000000',   // ← Replace with real number (country code + number, no +)
  instagram: 'beefit.coach', // ← Replace with real Instagram handle
  youtube: '',               // ← Replace with YouTube channel URL
  tiktok: '',                // ← Replace with TikTok handle
};

/* ── DOM ready ── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  initCounters();
  initGalleryLightbox();
  initContactForm();
  initBackToTop();
  initSocialLinks();
  initNavActiveLinks();
  initParallaxHero();
});

/* ================================================================
   NAVBAR – sticky + active state
================================================================ */
function initNavbar() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;

  const handleScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Close mobile menu on link click
  const links = nav.querySelectorAll('.nav-link');
  const collapse = document.getElementById('navMenu');
  links.forEach(link => {
    link.addEventListener('click', () => {
      const bsCollapse = bootstrap.Collapse.getInstance(collapse);
      if (bsCollapse) bsCollapse.hide();
    });
  });
}

/* ================================================================
   ACTIVE NAV LINKS – Intersection Observer per section
================================================================ */
function initNavActiveLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#mainNav .nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`#mainNav .nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => observer.observe(s));
}

/* ================================================================
   SCROLL ANIMATIONS – fade in on viewport enter
================================================================ */
function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay for siblings
        const delay = entry.target.style.animationDelay || '0s';
        const ms = parseFloat(delay) * 1000 || 0;
        setTimeout(() => {
          entry.target.classList.add('in-view');
        }, ms);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ================================================================
   COUNTERS – count-up animation on scroll into view
================================================================ */
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const easeOut = (t) => 1 - Math.pow(1 - t, 4);

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      el.textContent = Math.floor(easeOut(progress) * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

/* ================================================================
   GALLERY LIGHTBOX
================================================================ */
function initGalleryLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');

  if (!overlay || !lightboxImg) return;

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.querySelector('img')?.src;
      const alt = item.querySelector('img')?.alt || '';
      if (!src) return;
      lightboxImg.src = src;
      lightboxImg.alt = alt;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => { lightboxImg.src = ''; }, 300);
  };

  closeBtn?.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closeLightbox();
  });
}

/* ================================================================
   CONTACT FORM
================================================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Basic validation
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const submitBtn = document.getElementById('cf-submit-btn');
    const originalText = submitBtn.innerHTML;

    // Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Envoi en cours...';

    // Simulate async send (replace with real API call)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Build WhatsApp fallback message
    const name = form.querySelector('#cf-name').value;
    const email = form.querySelector('#cf-email').value;
    const goal = form.querySelector('#cf-goal').value;
    const message = form.querySelector('#cf-message').value;

    const waMsg = encodeURIComponent(
      `Bonjour BeeFit ! 👋\nPrénom: ${name}\nEmail: ${email}\nObjectif: ${goal}\nMessage: ${message}`
    );

    // Show success
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
    successMsg.classList.remove('d-none');
    form.reset();
    form.classList.remove('was-validated');

    // Auto-redirect to WhatsApp after 2s
    setTimeout(() => {
      window.open(`https://wa.me/${CONFIG.whatsapp}?text=${waMsg}`, '_blank');
    }, 2000);

    // Hide success after 5s
    setTimeout(() => successMsg.classList.add('d-none'), 5000);
  });
}

/* ================================================================
   BACK TO TOP BUTTON
================================================================ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ================================================================
   SOCIAL LINKS – set from CONFIG
================================================================ */
function initSocialLinks() {
  // Update WhatsApp links site-wide
  document.querySelectorAll('a[href*="wa.me/33600000000"]').forEach(el => {
    el.href = el.href.replace('33600000000', CONFIG.whatsapp);
  });

  // Footer Instagram
  const igBtn = document.getElementById('footer-ig');
  if (igBtn && CONFIG.instagram) {
    igBtn.href = `https://www.instagram.com/${CONFIG.instagram}`;
    igBtn.target = '_blank';
    igBtn.rel = 'noopener';
  }

  // Footer YouTube
  const ytBtn = document.getElementById('footer-yt');
  if (ytBtn && CONFIG.youtube) {
    ytBtn.href = CONFIG.youtube;
    ytBtn.target = '_blank';
    ytBtn.rel = 'noopener';
  }
}

/* ================================================================
   HERO PARALLAX (subtle)
================================================================ */
function initParallaxHero() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;

  // Disable on mobile / reduced motion
  if (window.matchMedia('(max-width: 768px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
  }, { passive: true });
}
