const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      tabsItems.forEach(function (item) {
        item.classList.remove("active");
      });

      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}

document.querySelector(".tabs__nav-btn").click();

var swiper = new Swiper(".mainSwiper", {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1400: {
      slidesPerView: 4,
    },

    980: {
      slidesPerView: 3,
    },
    540: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".swiper__gallery", {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1400: {
      slidesPerView: 5,
    },

    980: {
      slidesPerView: 4,
    },
    540: {
      slidesPerView: 2,
    },
  },
});

const btnOff = document.querySelector(".open-popup"),
  btnOn = document.querySelector(".popup"),
  body = document.body;

let disableScroll = function () {
  let pagePosition = window.scrollY;
  document.body.classList.add("active");
  document.body.dataset.position = pagePosition;
  document.body.style.top = -pagePosition + "px";
};

let enableScroll = function () {
  let pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = "auto";
  document.body.classList.remove("active");
  window.scroll({ top: pagePosition, left: 0 });
  document.body.removeAttribute("active");
};

btnOff.addEventListener("click", (e) => {
  disableScroll();
  e.currentTarget.style.pointerEvents = "none";
  btnOn.style.pointerEvents = "auto";
});

btnOn.addEventListener("click", (e) => {
  enableScroll();
  e.currentTarget.style.pointerEvents = "none";
  btnOff.style.pointerEvents = "auto";
});

let popupBg = document.querySelector(".popup__bg"); // Фон попап окна
let popup = document.querySelector(".popup"); // Само окно
let openPopupButtons = document.querySelectorAll(".open-popup"); // Кнопки для показа окна
let closePopupButton = document.querySelector(".close-popup");

console.log(body);

openPopupButtons.forEach((button) => {
  // Перебираем все кнопки
  button.addEventListener("click", (e) => {
    // Для каждой вешаем обработчик событий на клик
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    popupBg.classList.add("active"); // Добавляем класс 'active' для фона
    popup.classList.add("active"); // И для самого окна
    body.classList.add("active");
  });
});

closePopupButton.addEventListener("click", () => {
  // Вешаем обработчик на крестик
  popupBg.classList.remove("active"); // Убираем активный класс с фона
  popup.classList.remove("active"); // И с окна
  body.classList.remove("active");
});

document.addEventListener("click", (e) => {
  // Вешаем обработчик на весь документ
  if (e.target === popupBg) {
    // Если цель клика - фот, то:
    popupBg.classList.remove("active"); // Убираем активный класс с фона
    popup.classList.remove("active"); // И с окна
    body.classList.remove("active");
  }
});

const cards = document.querySelectorAll(".open-popup");
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    let targetEl = e.target;
    let targetCardText = card.querySelector(".card__text");
    let targetCardImage = card.querySelector(".card__image");
    document.querySelector(".popup__text").textContent =
      targetCardText.textContent;
    document.querySelector(".popup__image").src = targetCardImage.src;
  });
});
