const  testTextField = document.querySelector('#testTextField');

//testTextField.onclick = function() {
//    event.preventDefault();
//    this.textContent = prompt('Введите Текст');
//  }

testTextField.addEventListener('click', (event) => {
    event.preventDefault();
    testTextField.textContent = prompt('Введите Текст');
  })