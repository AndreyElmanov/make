// -------------------Имайл------------------------

// Находим элемент

const email = document.querySelector("#email");
const emailLabel = document.querySelector(".interactive");
const invalidEmail = document.querySelector(".invalid");

// Фокус на поле

email.addEventListener("focus", function () {
  emailLabel.style.display = "block";
  invalidEmail.style.display = "none";
  email.placeholder = "";
  email.style.borderBottom = "solid 4px blue";
});

// Снятие фокуса с поля, добавляем условия и проверки, при котрых меняется стиль

email.addEventListener("blur", function () {
  if (!email.value.includes("@") || email.value.match(/([А-Яа-я])/g)) {
    invalidEmail.style.display = "block";
    emailLabel.style.color = "red";
  }
  if (email.value.includes("@") && !email.value.match(/([А-Яа-я])/g)) {
    emailLabel.style.color = "grey";
  }
  if (email.value === "") {
    invalidEmail.style.display = "none";
    emailLabel.style.display = "none";
    emailLabel.style.color = "grey";
    email.placeholder = "E-mail";
  }
  if (!email.value === "") {
    email.style.borderBottom = "solid 4px blue";
  }
});

// -----------------Ниспадающее меню---------------

// Находим элемент

const menu = document.getElementsByClassName("box_menu");
const option = document.getElementsByClassName("option");
const menuLabel = document.querySelector("#label_menu_active");
const menuChoise = document.querySelector("#menu");

// Функция открытия списка

for (i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function () {
    this.classList.toggle("active");
    menuLabel.style.display = "block";
  });
}

// Функция выбора из списка с изменением стилей и заменой текста

for (i = 0; i < option.length; i++) {
  option[i].addEventListener("click", function () {
    menuChoise.innerText = this.innerText;
    if (menuChoise.innerText == this.innerText) {
      this.style.color = "blue";
      menuChoise.style.borderBottom = "solid 2px blue";
    }
  });
}

// ------------------Аккордеон---------------------

// Находим элемент

const accordion = document.getElementsByClassName("container");

// Функция открытия аккордеона

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}