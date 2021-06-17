 
    const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_enq4212';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Envoyer';
      alert('message envoyé');
    }, (err) => {
      btn.value = 'Envoyer';
      alert(JSON.stringify(err));
    });
});
