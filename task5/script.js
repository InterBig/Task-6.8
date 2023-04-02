const  InputTextField = document.querySelector('#InputTextField');
const  duplicateField = document.querySelector('#duplicateField');
const  button = document.querySelector('button');
//let input = document.querySelector('input').value;
//console.log(input);
//console.log(input.value);

//InputTextField.input = function() {
  //event.preventDefault();
  //console.log(input.value);
  // duplicateField.textContent = input.value;
 //}
 InputTextField.addEventListener('keydown', (event) => {
    //  console.log('Это тот блок');
      duplicateField.textContent = InputTextField.value;
  })

  button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(InputTextField.value);
    //duplicateField.textContent = "";
    InputTextField.value = "";
    duplicateField.textContent = InputTextField.value;
  })

//InputTextField.onclick = function() {
   
  //event.preventDefault();
//  console.log('Это тот блок');
 //duplicateField.textContent = InputTextField.value;
  
//}

//InputTextField.addEventListener('keydown', function(e) {
     // if (e.keyCode === 13) {
        // можете делать все что угодно со значением текстового поля
       // console.log(this.value);
     // }
      //event.preventDefault();
 // console.log('Это тот блок');
  //duplicateField.textContent = InputTextField.value;
   
    //});
  

