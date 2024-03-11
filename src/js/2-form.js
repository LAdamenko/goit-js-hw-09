const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

form.addEventListener('input', formInputHandler);

function formInputHandler(event) {
    const formData = {
      email: form.email.value.trim(),
      message: form.message.value.trim()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const loadFormData = () => {
    const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  };
  
loadFormData(); 
 
form.addEventListener('submit', formSubmitHandler);
    
function formSubmitHandler(event) {
    event.preventDefault();
    const formData = {
      email: form.email.value.trim(),
      message: form.message.value.trim()
    };
    
    if (form.email.value === "" || form.message.value === "") {
        alert("All form fields must be filled in");
    } else {
        console.log(formData);
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
    }
  };
