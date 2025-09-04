/* ------------------------
   Smooth Scroll for Links
------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ------------------------
   Sidebar Mobile Toggle
------------------------- */
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('backdrop');

function closeSidebar() {
  sidebar.classList.remove('active');
}

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', closeSidebar);
});

backdrop.addEventListener('click', closeSidebar);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSidebar();
    closeAllModals();
  }
});

/* ------------------------
   Lightbox for Certificates
------------------------- */
function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

/* ------------------------
   Generic Modal Functions
------------------------- */
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = 'block';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = 'none';
}

/* ------------------------
   Badge Modal
------------------------- */
function openBadgeModal() {
  openModal('badgeModal');
}

function closeBadgeModal() {
  closeModal('badgeModal');
}

/* ------------------------
   Close Modals when clicking outside
------------------------- */
window.addEventListener('click', function(event) {
  // Close badge modal if clicked outside
  const badgeModal = document.getElementById('badgeModal');
  if (event.target === badgeModal) closeBadgeModal();

  // Close all other modals
  document.querySelectorAll('.modal').forEach(modal => {
    if (event.target === modal) modal.style.display = 'none';
  });
});

/* ------------------------
   Utility: Close all modals
------------------------- */
function closeAllModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.style.display = 'none';
  });
}
