export default function contactMe() {
  const form = document.getElementById('contact_me_form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const { contact_name, contact_email, message_body } = e.target;
    console.log(contact_name.value, contact_email.value, message_body.value);

    const endPoint = 'https://ghwhljly34.execute-api.us-east-1.amazonaws.com/default/sendContactEmail';
    const body = JSON.stringify({
      senderName: contact_name.value,
      senderEmail: contact_email.value,
      message: message_body.value,
    });
    const requestOptions = {
      method: 'POST',
      body
    };

    fetch(endPoint, requestOptions)
      .then(res => {
        if (!res.ok) throw new Error('Error in fetch');
        return res.json();
      })
      .then(res => {
        document.getElementById("result-text").innerText =
          "Email sent successfully! I will respond soon. Thank you!"
      })
      .catch(e => {
        document.getElementById("result-text").innerText =
          "An unknown error occured. Please try again!"
      })

  });
}