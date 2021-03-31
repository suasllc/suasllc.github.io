export default function contactMe() {
  const form = document.getElementById('contact_me_form');
  const contact_reset = document.getElementById('contact_reset');
  const contact_name = document.getElementById('contact_name');
  const contact_email = document.getElementById('contact_email');
  const message_body = document.getElementById('message_body');
  const submit_contact_button = document.getElementById('submit_contact_button');
  const result_text = document.getElementById('result_text');
  const contact_form_confirm_modal = document.getElementById('contact_form_confirm_modal');
  const contact_reset_yes = document.getElementById('contact_reset_yes');
  const contact_reset_no = document.getElementById('contact_reset_no');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const { contact_name, contact_email, message_body } = e.target;
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
        result_text.style = 'color: green;';
        result_text.innerText = "Email sent successfully! I will respond soon. Thank you!"
        contact_name.value = "";
        contact_email.value = "";
        message_body.value = "";
        enableDisableContactButtons();
      })
      .catch(e => {
        result_text.style = 'color: red;';
        result_text.innerText = "An unknown error occured. Please try again!"
      })
      .finally(() => {
        setTimeout(() => result_text.innerText = "", 3000);
      })

  });

  contact_reset.addEventListener('click', e => {
    e.preventDefault();
    contact_form_confirm_modal.classList.remove('hidden');
  });

  function enableDisableSubmitButton() {
    if (contact_name.value && contact_email.value && message_body.value) submit_contact_button.disabled = false;
    else submit_contact_button.disabled = true;
  }
  function enableDisableResetButton() {
    if (contact_name.value || contact_email.value || message_body.value) contact_reset.disabled = false;
    else contact_reset.disabled = true;
  }
  function enableDisableContactButtons() {
    enableDisableSubmitButton();
    enableDisableResetButton();
  }
  contact_name.addEventListener('input', e => {
    enableDisableContactButtons();
  });
  contact_email.addEventListener('input', e => {
    enableDisableContactButtons();
  });
  message_body.addEventListener('input', e => {
    enableDisableContactButtons();
  });
  contact_reset_no.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    contact_form_confirm_modal.classList.add('hidden');
  })
  contact_reset_yes.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    contact_name.value = "";
    contact_email.value = "";
    message_body.value = "";
    enableDisableContactButtons();
    contact_form_confirm_modal.classList.add('hidden');
  })
}