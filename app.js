// === DISPLAY SIDE BAR FOR MEDIUM AND SMALLER SCREENS ===
const toggleMenu = document.querySelector('.toggle-menu');
const sidebar = document.getElementById('sidebar');
const menubar = toggleMenu.querySelector('i');
const closeMenu = document.querySelector('.close-menu');

toggleMenu.addEventListener('click', () => {
  sidebar.classList.add('active');
});

// CLOSE SIDEBAR
closeMenu.addEventListener('click', () => {
  sidebar.classList.remove('active');
  sidebar.classList.add('closing');
});

// ✅ MOVE nav-link listener OUTSIDE closeMenu (Fixes bug)
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((nav) => {
  nav.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});

// AUTO-CLOSE SIDEBAR ON WINDOW RESIZE (Desktop View)
window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;
  if (screenWidth > 765) {
    sidebar.classList.remove('active');
  }
});

// === DARK MODE TOGGLE ===
const bgToggle = document.getElementById('modeToggle');
const icon = document.querySelector('.mode');

bgToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  icon.classList.toggle('bx-moon');
  icon.classList.toggle('bx-sun');
});

// ✅ SYNC ICON ON PAGE LOAD
window.addEventListener('DOMContentLoaded', () => {
  const icon = document.querySelector('.mode');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.remove('bx-moon');
    icon.classList.add('bx-sun');
  } else {
    icon.classList.remove('bx-sun');
    icon.classList.add('bx-moon');
  }
});

// === BACK TO TOP BUTTON ===
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const show = window.scrollY > 300;
  backToTopBtn.style.display = show ? 'block' : 'none';
  backToTopBtn.setAttribute('aria-hidden', show ? 'false' : 'true');
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === ACCORDION ===
document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const content = document.getElementById(button.getAttribute('aria-controls'));

    // Close all other open items
    document.querySelectorAll('.accordion-header').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      document.getElementById(b.getAttribute('aria-controls')).hidden = true;
    });

    // Toggle current
    button.setAttribute('aria-expanded', !expanded);
    content.hidden = expanded;
  });

  // ✅ ADD KEYBOARD SUPPORT FOR ACCESSIBILITY
  button.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      button.click();
    }
  });
});
