const  InputTextField = document.querySelector('#InputTextField');
const  duplicateField = document.querySelector('#duplicateField');
const  button = document.querySelector('button');

 InputTextField.addEventListener('keydown', (event) => {
    duplicateField.textContent = InputTextField.value;
  })

  button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(InputTextField.value);
    InputTextField.value = "";
    duplicateField.textContent = InputTextField.value;
  })

