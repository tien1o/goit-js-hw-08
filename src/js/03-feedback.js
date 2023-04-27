import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const feedbackFormState = JSON.parse(
  localStorage.getItem('feedback-form-state') || '{}'
);

emailInput.value = feedbackFormState.email || '';
messageInput.value = feedbackFormState.message || '';

feedbackForm.addEventListener(
  'input',
  throttle(() => {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData), 500);
  })
);
 
feedbackForm.addEventListener('submit', Event => {
  Event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  if (!formData.email || !formData.message) {
    alert('Please fill in all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
