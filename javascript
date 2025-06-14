document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const nameInput = document.getElementById('name') as HTMLInputElement;
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const messageInput = document.getElementById('message') as HTMLTextAreaElement;

  if (!nameInput || !emailInput || !messageInput) {
    alert('Some form elements are missing.');
    return;
  }

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent.`);

  // Cast `this` to HTMLFormElement
  (this as HTMLFormElement).reset();
});
