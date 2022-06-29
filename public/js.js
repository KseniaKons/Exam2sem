let modalElem = document.querySelector('.modal');
let push = document.querySelector('.push'),
    namee = document.getElementById('name'),
    description = document.getElementById('description');

namee.addEventListener("input", (e) => {

    if (namee.validity.typeMismatch) {
        namee.setCustomValidity("Неправельный тип данных!");
        namee.classList.add('active'); //красный фон
        namee.classList.remove('hover');
    }
    else {
        namee.setCustomValidity("");
        namee.classList.remove('active');
        namee.classList.add('hover');
    }

    if (namee.validity.valueMissing) {
        namee.setCustomValidity("Заполните пустые поля!");
        namee.classList.add('active'); //красный фон
        namee.classList.remove('hover');
    }
    else {
        namee.setCustomValidity("");
        namee.classList.remove('active');
        namee.classList.add('hover');
    }
});


description.addEventListener("input", (e) => {

    if (description.validity.typeMismatch) {
        description.setCustomValidity("Неправельный тип данных!");
        description.classList.add('active'); //красный фон
        description.classList.remove('hover');
    }
    else {
        description.setCustomValidity("");
        description.classList.remove('active');
        description.classList.add('hover');
    }

    if (description.validity.valueMissing) {
        description.setCustomValidity("Заполните пустые поля!");
        description.classList.add('active'); //красный фон
        description.classList.remove('hover');
    }
    else {
        description.setCustomValidity("");
        description.classList.remove('active');
        description.classList.add('hover');
    }
});