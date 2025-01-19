const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  document.querySelector('.loading').classList.remove('hide');
  document.querySelector('.loading').classList.add('show');

  // Gather form data

  const params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  }

  emailjs.send("service_8v3z8or", "template_b45vx4r", params).then(
    message => {
      console.log('SUCCESS!', message);
      document.querySelector('.loading').classList.add('hide');
      document.querySelector('.sent-message').classList.remove('hide');
      document.querySelector('.sent-message').classList.add('show');
      contactForm.reset();
    }
  ).catch(error => {
    console.log('FAILED...', error);
    document.querySelector('.loading').classList.add('hide');
    document.querySelector('.error-message').classList.remove('hide');
    document.querySelector('.error-message').classList.add('show');
  });
});
