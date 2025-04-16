const trueBackground = 'white';
const trueColor = 'green';
const falseBackground = 'red';
const falseColor = 'black';

function checkMulti(answers, trueAnswers) {
    alert(answers);
    let k = 0;
    for (let i = 0; i < trueAnswers.length; i++) {
        if (trueAnswers.includes(answers[i]))

            k++;
    }

    if (k == trueAnswers.length) return true;
    else return false

}

function checkTask(n) {
    if (n == 2) {
        let inputElement = document.getElementById('task2');
        let value = inputElement.value;
        if (value.toUpperCase() == 'ВАДГБ') {
            inputElement.style.background = trueBackground;
            inputElement.style.color = trueColor;
        }
        else {
            inputElement.style.color = falseColor
            inputElement.style.background = falseBackground;
        }
    }

    if (n == 3) {
        let inputElement = document.getElementById('task3');
        let value = inputElement.value;
        if (checkMulti(value.toUpperCase().split(' '), ['ДИЗК', 'ДИАЗК', 'ДИАЗАБ', 'ДИСАБ'])) {
            inputElement.style.background = trueBackground;
            inputElement.style.color = trueColor;
        }
        else {
            inputElement.style.color = falseColor
            inputElement.style.background = falseBackground;
        }
    }
    if (n == 6) {
        let inputElement1 = document.getElementById('task61');
        let inputElement2 = document.getElementById('task62');
        let inputElement3 = document.getElementById('task63');
        let inputElement4 = document.getElementById('task64');
        let inputElement5 = document.getElementById('task65');
        let inputElement6 = document.getElementById('task66');
        let inputElement7 = document.getElementById('task67');
        let inputElement8 = document.getElementById('task68');
        let inputElement9 = document.getElementById('task69');
        let value1 = inputElement1.value;
        let value2 = inputElement2.value;
        let value3 = inputElement3.value;
        let value4 = inputElement4.value;
        let value5 = inputElement5.value;
        let value6 = inputElement6.value;
        let value7 = inputElement7.value;
        let value8 = inputElement8.value;
        let value9 = inputElement9.value;
        if (value1 == '8') {
            inputElement1.style.background = trueBackground;
            inputElement1.style.color = trueColor;
        }
        else {
            inputElement1.style.color = falseColor
            inputElement1.style.background = falseBackground;
        }
        if (value2 == '16') {
            inputElement2.style.background = trueBackground;
            inputElement2.style.color = trueColor;
        }
        else {
            inputElement2.style.color = falseColor
            inputElement2.style.background = falseBackground;
        }
        if (value3 == '256') {
            inputElement3.style.background = trueBackground;
            inputElement3.style.color = trueColor;
        }
        else {
            inputElement3.style.color = falseColor
            inputElement3.style.background = falseBackground;
        }
        if (value4 == '1024') {
            inputElement4.style.background = trueBackground;
            inputElement4.style.color = trueColor;
        }
        else {
            inputElement4.style.color = falseColor
            inputElement4.style.background = falseBackground;
        }
        if (value5 == '1536') {
            inputElement5.style.background = trueBackground;
            inputElement5.style.color = trueColor;
        }
        else {
            inputElement5.style.color = falseColor
            inputElement5.style.background = falseBackground;
        }

        if (value6 == '2') {
            inputElement6.style.background = trueBackground;
            inputElement6.style.color = trueColor;
        }
        else {
            inputElement6.style.color = falseColor
            inputElement6.style.background = falseBackground;
        }
        if (value7 == '80') {
            inputElement7.style.background = trueBackground;
            inputElement7.style.color = trueColor;
        }
        else {
            inputElement7.style.color = falseColor
            inputElement7.style.background = falseBackground;
        }
        if (value8 == '2048') {
            inputElement8.style.background = trueBackground;
            inputElement8.style.color = trueColor;
        }
        else {
            inputElement8.style.color = falseColor
            inputElement8.style.background = falseBackground;
        }
        if (value9 == '1536') {
            inputElement9.style.background = trueBackground;
            inputElement9.style.color = trueColor;
        }
        else {
            inputElement9.style.color = falseColor
            inputElement9.style.background = falseBackground;
        }
    }
}

function htmlToPDF() {
    // Элемент, который будет сохранён в PDF
    const element = document.body; // Здесь вы можете указать конкретный элемент

    // Опции для pdf
    const opt = {
        margin: 0,
        filename: 'Повторение 7 класс.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Генерация PDF
    html2pdf().from(element).set(opt).save();
}