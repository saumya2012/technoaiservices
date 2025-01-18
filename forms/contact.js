const contactForm = document.getElementById("contact-form"); // Get the form by its ID

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

  console.log("params", params);

  emailjs.send("service_5p46gf2", "template_d522p3c", params).then(
    message => {
      console.log('SUCCESS!', message);
      alert('Your message has been sent!');
      document.querySelector('.loading').classList.add('hide');
      document.querySelector('.sent-message').classList.remove('hide');
      document.querySelector('.sent-message').classList.add('show');
      contactForm.reset();
    }
  ).catch(error => {
    console.log('FAILED...', error);
    alert('There was an error sending your message. Please try again later.');
    document.querySelector('.loading').classList.add('hide');
    document.querySelector('.error-message').classList.remove('hide');
    document.querySelector('.error-message').classList.add('show');
  });
});
