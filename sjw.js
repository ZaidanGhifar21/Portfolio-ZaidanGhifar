/* ==========================================================================
   HORIZONTAL SCROLL CONVERTER (KHUSUS DESKTOP)
   ========================================================================== */
window.addEventListener('wheel', (e) => {
  // Hanya aktif di layar Desktop (di atas 1024px)
  if (window.innerWidth > 1024) {
    e.preventDefault();
    
    window.scrollBy({
      left: e.deltaY * 2.5,
      behavior: 'smooth'
    });
  }
}, { passive: false });

/* ==========================================================================
   NAVIGASI LINK KLIK (SMOOTH SCROLL DUAL-MODE)
   ========================================================================== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId === '#' || !targetId) return;
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      e.preventDefault();
      
      const isMobile = window.innerWidth <= 1024;
      
      if (isMobile) {
        // Mode Mobile: Scroll secara Vertikal (ke Bawah)
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      } else {
        // Mode Desktop: Scroll secara Horizontal (ke Samping)
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
        });
      }
    }
  });
});

/* ==========================================================================
   AUTO REFRESH LAYOUT SAAT RESIZE (LAYAR HP & DESKTOP)
   ========================================================================== */
window.addEventListener('resize', () => {
  if (typeof ScrollTrigger !== 'undefined') {
  }
});