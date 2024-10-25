import emailjs from 'emailjs-com';
export function sendEmail(formData) {
  return emailjs.send(
    'service_lorn7xw', // Reemplaza con tu Service ID de EmailJS
    'template_9ylzgd7', // Reemplaza con tu Template ID de EmailJS
    formData,
    '_GYu_ZGTq7KJ7cTe2'
  ).then((result) => {
      console.log(result.text);
      return { success: true }; // Devuelve un objeto indicando éxito
    })
    .catch((error) => {
      console.log(error.text);
      return { success: false, error: error.text }; // Devuelve un objeto indicando error
    });
}
