"use strict";

// Плавный скролл на форму заказа
const viewButton = document.getElementById("viewButton");
const productsSection = document.getElementById("productsSection");

viewButton.onclick = function () {
  productsSection.scrollIntoView({ behavior: "smooth" });
};

const menuLinks = Array.from(document.querySelectorAll(".menu__link"));

menuLinks.forEach((link) => {
  link.onclick = function () {
    document
      .getElementById(link.getAttribute("data-link"))
      .scrollIntoView({ behavior: "smooth" });
  };
});

const burgerButtons = Array.from(document.querySelectorAll(".item__button"));

burgerButtons.forEach((burgerButton) => {
  burgerButton.onclick = function () {
    document
      .getElementById("orderSection")
      .scrollIntoView({ behavior: "smooth" });
  };
});

// Валидация формы
const burger = document.getElementById("burger");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const orderButton = document.getElementById("orderButton");

orderButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  let hasError = false;

  [burger, name, phone].forEach((item) => {
    if (!item.value) {
      item.parentElement.style.background = "red";
      hasError = true;
    } else {
      item.parentElement.style.background = "";
    }
  });

  if (!hasError) {
    [burger, name, phone].forEach((item) => {
      item.value = "";
    });
    alert("Спасибо за заказ!");
  }
});

// Изменение валюты
const changeCurrency = document.getElementById("changeCurrency");
const itemsPrice = Array.from(document.querySelectorAll(".item__price"));
console.log(itemsPrice);

changeCurrency.onclick = function (evt) {
  let currentCurrency = evt.target.innerText;
  let newCurrency = "$";
  let coefficient = 1;

  if (currentCurrency === "$") {
    newCurrency = "₽";
    coefficient = 80;
  } else if (currentCurrency === "₽") {
    newCurrency = "BYN";
    coefficient = 3;
  } else if (currentCurrency === "BYN") {
    newCurrency = "€";
    coefficient = 0.9;
  } else if (currentCurrency === "€") {
    newCurrency = "¥";
    coefficient = 6.9;
  }

  evt.target.innerText = newCurrency;

  itemsPrice.forEach((price) => {
    price.innerText =
      +(price.getAttribute("data-base-price") * coefficient).toFixed(1) +
      " " +
      newCurrency;
  });
};
