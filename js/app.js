// находим наш контейнер
const mainEl = document.querySelector(".main");
// добавляем инпут поле 
const passwordEl = document.createElement("input")
passwordEl.classList.add("password")
// добавляем атрибут вначале атрибут потом значени
passwordEl.setAttribute("placeholder", "Сгенерировать пароль");
// убираем стандартное положение то есть чтобы нельзя было написать 
passwordEl.addEventListener("keypress", (e)=>{
    // сброс
    e.preventDefault();
})
// добавляем в буфер обмена 
passwordEl.addEventListener("focus", (e)=>{
    // создаем кнопу копировани
    // реагируем на буфер обмена без выделения так как мы уже в фокусе 
    navigator.clipboard.writeText(passwordEl.value);
})
// создаем кнопу копировани
const copyBtn = document.createElement("button");
copyBtn.classList.add("password-button");
// добавим внутерь текст 
copyBtn.innerText = 'Скопировать';
copyBtn.addEventListener("click", (e)=>{
    // копируем 
    // выбираем элемент
    passwordEl.select();
    // диапозон
    passwordEl.setSelectionRange(0, 99999);
    // реагируем на буфер обмена 
    navigator.clipboard.writeText(passwordEl.value);
})
// кнопка генерации
const generateBtn = document.createElement("button");
generateBtn.classList.add("password-button");
// добавим внутерь текст 
generateBtn.innerText = 'Сгенерировать';
generateBtn.addEventListener("click", (e)=>{
    // вызов фун генерации и укз значение которое нам нужно 
    let random = generatePasswordBtn(12)
    // выводим в инпут поле через value !!
    passwordEl.value = random;
})
// фун генерации пароля
function generatePasswordBtn(passwordLength){
    // 4 стр для пароля цифры буквы символы
    const numberChars = "0123456789";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const symbolChars = "!@#$%^&*()_+";
    // объеденяем
    const allChars = numberChars + upperChars + lowerChars + symbolChars;
    // создаем переменную в которую будут заноситься рандомные пароли
    let randomStr = "";
    // цикл перебора симвлово
    for(let i = 0; i < passwordLength; i++){
        // создаем переменную где округляем и перемножаем с рандомом на все значения в переменной
        let randomGenerate = Math.floor(Math.random() * allChars.length)
        // присваеваем с +=
        randomStr += allChars[randomGenerate];
    }
    return randomStr;
}
// добавляем елемент в действие
mainEl.appendChild(passwordEl);
mainEl.appendChild(copyBtn);
mainEl.appendChild(generateBtn);
