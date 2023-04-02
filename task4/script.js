const  testTextField = document.querySelector('#testTextField');

testTextField.onclick = function() {
  // тело обработчика
  event.preventDefault();
  //console.log('Это тот блок');
  this.textContent = prompt('Введите Текст');
  // конец тела обработчика
}