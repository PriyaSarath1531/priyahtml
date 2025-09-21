// Smooth scroll for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form validation and feedback
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const alertBox = document.getElementById('formAlert');

  if (name && email && message) {
    alertBox.innerHTML = '<div class="alert alert-success">Thank you for contacting me!</div>';
    this.reset();
  } else {
    alertBox.innerHTML = '<div class="alert alert-danger">Please fill in all fields.</div>';
  }
});