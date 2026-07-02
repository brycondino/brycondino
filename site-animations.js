document.addEventListener('DOMContentLoaded', function () {
  if (!window.gsap) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  const heroProfilePanel = document.querySelector('.hero .panel, .hero-panel');
  if (heroProfilePanel) {
    gsap.set(heroProfilePanel, { autoAlpha: 1, clearProps: 'opacity,visibility' });
  }

  gsap.from('.nav', { y: -24, opacity: 0, duration: 0.6, ease: 'power3.out' });

  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .from('.eyebrow', { y: 18, opacity: 0, duration: 0.45 })
    .from('h1', { y: 34, opacity: 0, duration: 0.7 }, '-=0.18')
    .from('.lead', { y: 22, opacity: 0, duration: 0.55 }, '-=0.32')
    .from('.actions .btn', { y: 18, opacity: 0, duration: 0.42, stagger: 0.07 }, '-=0.25');

  if (heroProfilePanel) {
    gsap.fromTo(heroProfilePanel,
      { x: 34, opacity: 0, scale: 0.98 },
      { x: 0, opacity: 1, scale: 1, duration: 0.62, ease: 'power3.out', delay: 0.2, clearProps: 'opacity,visibility' }
    );
  }

  document.querySelectorAll('.card, .kpi, .exp, .experience-item, .logic-card, .score-box, .hud-box, .tool, .action-card, .table-card').forEach(function (el) {
    gsap.from(el, {
      y: 32,
      opacity: 0,
      duration: 0.55,
      ease: 'power3.out',
      scrollTrigger: window.ScrollTrigger ? { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' } : null
    });
  });

  document.querySelectorAll('.dashboard, .game, .contact').forEach(function (el, i) {
    gsap.to(el, {
      y: i % 2 ? -6 : -10,
      ease: 'none',
      scrollTrigger: window.ScrollTrigger ? { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } : null
    });
  });

  document.querySelectorAll('.btn, .tab, .mission-tab, .tool, .action-card, .kpi').forEach(function (el) {
    el.addEventListener('mouseenter', function () { gsap.to(el, { y: -3, scale: 1.02, duration: 0.16 }); });
    el.addEventListener('mouseleave', function () { gsap.to(el, { y: 0, scale: 1, duration: 0.16 }); });
  });

  document.querySelectorAll('.photo-frame, .brand-dot, .dot, .pulse').forEach(function (el) {
    gsap.to(el, { y: -5, duration: 1.7, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  });

  window.addEventListener('load', function () {
    if (heroProfilePanel) gsap.set(heroProfilePanel, { autoAlpha: 1 });
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });
});
