const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

// Save
[nameInput,emailInput].forEach(input=>{
  input.addEventListener('input',()=>{
    localStorage.setItem('form', JSON.stringify({
      name:nameInput.value,
      email:emailInput.value
    }));
  });
});

// Load
const saved = JSON.parse(localStorage.getItem('form'));
if(saved){
  nameInput.value = saved.name;
  emailInput.value = saved.email;
}