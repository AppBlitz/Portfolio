import emailjs from '@emailjs/browser';
function send(data) {
  const TEMPLATEID = "template_e8q9o6l";
  const SERVICEID = "service_2tz34o8";
  const APIKEY = "ioFZfdnhN50mU6UH-";
  const user = {
    name_from: data.name,
    to_name: "Carlos Fabián Corrales Zapata",
    from_name: data.name,
    message: data.idea,
    my_email: data.email
  }
  emailjs
    .send(SERVICEID, TEMPLATEID, user, {
      publicKey: APIKEY,
    })
    .then(
      (response) => {
        console.log('¡ÉXITO!', response.status, response.text);
      },
      (err) => {
        console.log('FALLÓ...', err);
      },
    );


}
export { send }
