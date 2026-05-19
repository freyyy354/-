//События и обработка.
//Без html кода.
//Существует три основных способа связать событие с кодом.

//Свойство DOM-элемента.
const btn = document.querySelector('button');
btn.onclick = function() {
  console.log('Первый клик');
};
//Метод addEventListener.
//Позволяет вешать сколько угодно обработчиков на одно событие.

const btn = document.querySelector('button');

function sayHello() {
  console.html('Привет!');
}

//Добавление
btn.addEventListener('click', sayHello);

//Удаление, работает только с именованными функциями.
btn.removeEventListener('click', sayHello);

//Объект события event.
//При наступлении события браузер передает в функцию-обработчик объект со всеми деталями.
const link = document.querySelector('a');
link.addEventListener('click', function(event) {
  //event — объект события.
  console.log('Тип события:', event.type); 
  console.log('Элемент, на котором сработал код:', event.currentTarget); 
  
  // Отмена стандартного поведения браузера, переход по ссылке.
  event.preventDefault(); 
});

// Всплытие и Погружение (Bubbling and Capturing).
//Когда событие происходит на элементе, оно сначала идет сверху вниз (погружение), а затем снизу вверх (всплытие). По умолчанию addEventListener работает на фазе всплытия.
//const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

child.addEventListener('click', (e) => {
  console.log('1. Клик на кнопке');
});
parent.addEventListener('click', () => {
  console.log('2. Событие всплыло до div');
});

//Делегирование событий.
//Вместо того чтобы вешать обработчик на каждую кнопку, мы вешаем один обработчик на их общего родителя. Это экономит память и работает для динамически добавленных элементов.

const list = document.querySelector('#todo-list');
list.addEventListener('click', function(event) {
  //Проверяем, что кликнули именно по кнопке удаления.
  if (event.target.classList.contains('delete-btn')) {
    const listItem = event.target.closest('li');
    listItem.remove(); // Удаляем строку с задачей.
    console.log('Задача удалена');
  }
});

//Основные типы событий.

Мышь: click, contextmenu - правый клик, mouseover / mouseout - наведение курсора.
Клавиатура: keydown - нажатие кнопки, keyup - отпускание кнопки.
Формы: submit - отправка, focus - фокус на инпуте, input - изменение текста.
Документ: DOMContentLoaded.


