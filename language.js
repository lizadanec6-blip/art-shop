const translations = {
  en: {
    gallery: "Gallery",
    stock: "Stock",
    author: "Author",
    instagram: "Instagram:",
    language: "Change language",

    size: "Size:",
    materials: "Materials:",
    price: "Price:",
    year: "Year:",
    cm: "cm",
    currency: "UAH",

    "art1-title": "Summer",
    "art1-description": "An original handmade painting.",
    "art1-materials": "canvas, oil paints",

    "art2-title": "Summer",
    "art2-description": "An original handmade painting.",
    "art2-materials": "canvas, oil paints",

    "art3-title": "Still Life",
    "art3-description": "An original handmade painting.",
    "art3-materials": "canvas, oil paints",
  },

  ua: {
    gallery: "Галерея",
    stock: "В наявності",
    author: "Автор",
    instagram: "Instagram:",
    language: "Змінити мову",

    size: "Розмір:",
    materials: "Матеріали:",
    price: "Ціна:",
    year: "Рік:",
    cm: "см",
    currency: "грн",

    "art1-title": "Літо",
    "art1-description": "Авторська картина, виконана вручну.",
    "art1-materials": "полотно, олійні фарби",

    "art2-title": "Літо",
    "art2-description": "Авторська картина, виконана вручну.",
    "art2-materials": "полотно, олійні фарби",

    "art3-title": "Натюрморт",
    "art3-description": "Авторська картина, виконана вручну.",
    "art3-materials": "полотно, олійні фарби",
  },
};

/* ЗМІНА МОВИ */

function changeLanguage(language) {
  localStorage.setItem("siteLanguage", language);

  document.documentElement.lang = language === "ua" ? "uk" : "en";

  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.dataset.lang;

    if (translations[language][key] !== undefined) {
      element.textContent = translations[language][key];
    }
  });
}

/* ПРИ КОЖНОМУ ВІДКРИТТІ НОВОЇ СТОРІНКИ */

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("siteLanguage") || "en";

  changeLanguage(savedLanguage);
});
