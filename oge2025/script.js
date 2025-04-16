

let taskInfo =
{
    attempt: 0,
    errors: 0,
    countCorrect: 0
}

function check(element) {
    let id = element.id.slice(3, 6)
    console.log(id)
    let answer = document.getElementById(id)
    if (answer.style.color == 'green') return;
    if (answer.value == '') return;
    console.log(answer.value, data[parseInt(id)])
    if (answer.value == data[parseInt(id)]) {
        answer.style.color = 'green'
        taskInfo.countCorrect++;
    }
    else {
        answer.style.color = 'red'
        taskInfo.errors++;
    }
    taskInfo.attempt++;
    updateInfo();
    //console.log(answer)
}

function updateInfo() {
    document.getElementById('attempt').textContent = taskInfo.attempt;
    document.getElementById('errors').textContent = taskInfo.errors;
    document.getElementById('countCorrect').textContent = taskInfo.countCorrect;
}
function load() {//выполняется после загрузки страницы
    // Получаем все элементы input на странице
    const inputs = document.querySelectorAll('input');

    // Перебираем все элементы input и отключаем автозаполнение
    inputs.forEach(input => {
        input.autocomplete = 'off';
    });
    hideRandomTables();
    //populateVoiceList();
    // Добавляем обработчик событий для всех параграфов
document.querySelectorAll('.task').forEach(td => {
    td.addEventListener('click', () => {
        console.log('.task')
        speakText(td.textContent);
    });
}); 

}


function hideRandomTables() {
    // Получаем все таблицы на странице
    const tables = document.querySelectorAll('table');

    // Преобразуем NodeList в массив
    let tablesArray = Array.from(tables);

    // Исключаем таблицу с id='info'
    const infoTable = document.getElementById('info');
    tablesArray = tablesArray.filter(table => table !== infoTable);
    // Если таблиц меньше или равно 10, ничего не делаем
    if (tablesArray.length <= 10) {
        return;
    }

    // Перемешиваем массив таблиц
    for (let i = tablesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tablesArray[i], tablesArray[j]] = [tablesArray[j], tablesArray[i]];
    }

    // Прячем все таблицы, кроме первых 10
    tablesArray.slice(10).forEach(table => {
        table.style.display = 'none';
    });
}



function inputText(title, html, inputPlaceholder) {
    return Swal.fire({
        title: title,
        html: html,
        input: 'text',
        showCancelButton: true,
        animation: "slide-from-top",
        inputPlaceholder: inputPlaceholder
    });
}


function saveToServer()
{
    prompt("are you sure?")
    //inputText('Warning!','Are you sure?','...');
}

// Функция для проговаривания текста
function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ru-RU'; // Устанавливаем язык на русский
        console.log(window.speechSynthesis);
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Ваш браузер не поддерживает синтез речи.');
    }
}


function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    voices = voices.filter(a => a.lang.includes("en") && a.lang.includes("GB") && a.name.includes("Google"));
    //if not exists Google voices
    if (voices.length == 0) {
      voices = voices.filter(a => a.lang.includes("en") && a.lang.includes("GB"));
    }
    //console.log(voices);
  }