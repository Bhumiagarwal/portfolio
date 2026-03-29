
  // Scroll reveal animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Contact form handler with success simulation
  function handleSubmit(e) {
    e.preventDefault();
    const successMsg = document.getElementById('form-success');
    successMsg.style.display = 'block';
    e.target.reset();
    setTimeout(() => successMsg.style.display = 'none', 5000);
  }

  // small hover dynamic for avatar
  const avatar = document.querySelector('.avatar-wrap');
  if(avatar) {
    avatar.addEventListener('mouseenter', () => avatar.style.transform = 'scale(1.02)');
    avatar.addEventListener('mouseleave', () => avatar.style.transform = 'scale(1)');
    avatar.style.transition = 'transform 0.3s ease';
  }
