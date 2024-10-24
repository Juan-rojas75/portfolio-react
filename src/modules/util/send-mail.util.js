import emailjs from 'emailjs-com';
export function sendEmail(formData) {
    emailjs.send(
        'service_lorn7xw', // Reemplaza con tu Service ID de EmailJS
        'template_9ylzgd7', // Reemplaza con tu Template ID de EmailJS
        formData,
        '_GYu_ZGTq7KJ7cTe2'
      ).then((result) => {
          console.log(result.text);
          alert('Mensaje enviado con éxito!');
        }, (error) => {
          console.log(error.text);
          alert('Error al enviar el mensaje.');
        });
  }
