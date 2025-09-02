// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Toggle mobile menu
function toggleMenu() {
  document.querySelector('.sidebar').classList.toggle('open');
}

// Lightbox functions
function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function openBadgeModal() {
  document.getElementById('badgeModal').style.display = 'block';
}

function closeBadgeModal() {
  document.getElementById('badgeModal').style.display = 'none';
}

// Optional: close when clicking outside modal
window.onclick = function(event) {
  const modal = document.getElementById('badgeModal');
  if (event.target === modal) {
    closeBadgeModal();
  }
}


function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

<script>
    const modal = document.getElementById("badgeModal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.getElementById("closeModal");

    openModal.onclick = () => modal.style.display = "flex";
    closeModal.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; }
  </script>
