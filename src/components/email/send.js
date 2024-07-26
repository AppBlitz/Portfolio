import emailjs from "@emailjs/browser";
function send(data) {
  const dataemail = dataEmail();
  emailjs
    .send(dataemail.serviceId, dataemail.templateId, userData(data), {
      publicKey: dataemail.apiKey,
    })
    .then(
      (response) => {
        console.log("¡ÉXITO!", response.status, response.text);
      },
      (err) => {
        console.log("FALLÓ...", err);
      },
    );
}

function dataEmail() {
  const data = {
    templateId: "template_e8q9o6l",
    serviceId: "service_2tz34o8",
    apiKey: "ioFZfdnhN50mU6UH-",
  };
  return data;
}
function userData(data) {
  const user = {
    name_from: data.name,
    to_name: "Carlos Fabián Corrales Zapata",
    from_name: data.name,
    message: data.message,
    my_email: data.email,
  };
  return user;
}
export { send };
