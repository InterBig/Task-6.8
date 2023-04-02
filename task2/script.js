const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', (event) => {
    alert('Служит для вывода информации в консоль');
    console.log('Текст, выведенный в консоль');
})


const alertLog = document.querySelector('#alert');

alertLog.addEventListener('click', (event) => {
    alert('Служит для вывода информации в Alert');
})


const promptLog = document.querySelector('#prompt');

promptLog.addEventListener('click', (event) => {
    alert('Служит для ввода информации в Promt');
 })