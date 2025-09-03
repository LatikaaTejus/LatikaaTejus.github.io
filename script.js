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
function toggleMenu() {
  document.querySelector('.sidebar').classList.toggle('active');
}

/* ------------------------
   Lightbox Functions (for certificates)
------------------------- */
function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

/* ------------------------
   Certificate Modals
------------------------- */
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

/* ------------------------
   Badge Modal
------------------------- */
function openBadgeModal() {
  document.getElementById('badgeModal').style.display = 'block';
}

function closeBadgeModal() {
  document.getElementById('badgeModal').style.display = 'none';
}

/* ------------------------
   Close when clicking outside modal
------------------------- */
window.onclick = function(event) {
  const badgeModal = document.getElementById('badgeModal');
  if (event.target === badgeModal) {
    closeBadgeModal();
  }

  // Close any certificate modal if click outside
  const modals = document.querySelectorAll('.modal');
  modals.forEach(m => {
    if (event.target === m) {
      m.style.display = "none";
    }
  });
};




// Sidebar toggle for mobile
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Auto close sidebar when clicking a link (mobile)
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});

