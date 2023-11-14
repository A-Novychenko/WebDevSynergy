import html from "../public/svg/html5.svg";
import css from "../public/svg/css.svg";
import js from "../public/svg/javascript.svg";
import react from "../public/svg/react.svg";
import redux from "../public/svg/redux.svg";
import axios from "../public/svg/axios.svg";
import next from "../public/svg/next.js.svg";
import nodejs from "../public/svg/nodejs.svg";
import express from "../public/svg/express.svg";
import mongoose from "../public/svg/mongoose.svg";
import mongodb from "../public/svg/mongodb.svg";
import webpack from "../public/svg/webpack.svg";
import parcel from "../public/svg/parcel.svg";
import vite from "../public/svg/vite.svg";
import sass from "../public/svg/icons8-sass 1.svg";
import styled from "../public/svg/styled components.svg";
import material from "../public/svg/material ui.svg";
import figma from "../public/svg/figma.svg";

import taskProPoster from "../public/images/poster/task-pro-poster.png";
import filmotekaPoster from "../public/images/poster/filmoteka-poster.jpeg";
import taobaoPoster from "../public/images/poster/taobao-poster.jpeg";
import webstudioPoster from "../public/images/poster/webstudio-poster.jpeg";
import iceCreamPoster from "../public/images/poster/ice-cream-poster.jpeg";
import taskproApiPoster from "../public/images/poster/task-pro-restapi-poster.jpeg";
import phonebookPoster from "../public/images/poster/phonebook-poster.png";
import cleaningServicekPoster from "../public/images/poster/CleaningServicekPoster.png";
import supermarketPoster from "../public/images/poster/SupermarketPoster.png";
import libraryPoster from "../public/images/poster/libraryPoster.png";
import iTSchooPoster from "../public/images/poster/ITSchooPoster.png";
import landingPageWatchShopPoster from "../public/images/poster/LandingPageWatchShopPoster.png";
import flowersDeliveryAppPoster from "../public/images/poster/FlowersDeliveryAppPoster.png";
import redesignRealEstateWebsSite from "../public/images/poster/redesignRealEstateWebsSite.png";

export const projects: Project[] = [
  {
    id: 1,
    poster: taskProPoster,
    title: "Task Pro",
    discription: {
      en: "Application for time management. The minimalistic and intuitive interface allows you to create tasks with priority and deadline, as well as group them into columns and separate boards..",
      uk: "Додаток для керування завданнями. Мінімалістичний та інтуїтивний інтерфейс дозволяє створювати завдання з вказівкою пріоритету та крайнього дедлайном...",
    },
    techIcon: [react, redux, material, styled, vite, axios],
    role: "developer",
  },
  {
    id: 2,
    poster: filmotekaPoster,
    title: "Filmoteka",
    discription: {
      en: "Filmoteka is a web application for searching and viewing movies. It allows users to conveniently find films based on various criteria, including title, actors, and genres. ...",
      uk: "Фільмотека - це веб-застосунок для пошуку та перегляду фільмів. Він дозволяє користувачам зручно знаходити фільми за різними критеріями, включаючи назву, акторів і жанри...",
    },
    techIcon: [html, css, js, sass, axios, webpack],
    role: "developer",
  },
  {
    id: 3,
    poster: taobaoPoster,
    title: "Taobao",
    discription: {
      en: "Project provides educational materials, tips, and practical tools for successful shopping on such popular platforms as AliExpress, Taobao, and others. ...",
      uk: "Проект надає навчальні матеріали, поради та практичні інструменти для успішного шопінгу на таких популярних платформах, як AliExpress, Taobao та інші...",
    },
    techIcon: [next, css, figma, vite],
    role: "developer",
  },
  {
    id: 4,
    poster: webstudioPoster,
    title: "Web studio",
    discription: {
      en: "The website helps to attract new customers. It tells about the activities of the company and its employees, presents the range of services and the possibility to order them. ",
      uk: "Цей веб-сайт допомагає привернути нових клієнтів. Він розповідає про діяльність компанії та її співробітників, представляє асортимент...",
    },
    techIcon: [html, css, sass, js, figma],
    role: "developer",
  },
  {
    id: 5,
    poster: iceCreamPoster,
    title: "Ice creame",
    discription: {
      en: "ICE CREAM MADE WITH PASSION is more than just ice cream. It's a place where the genuine passion for crafting the tastiest desserts comes to life. Our mission...",
      uk: "МОРОЗИВО З ДУШОЮ - це більше, ніж просто морозиво. Це місце, де справжня пристрасть до створення найсмачніших десертів оживає...",
    },
    techIcon: [html, css, sass, js, figma, parcel],
    role: "developer",
  },
  {
    id: 6,
    poster: taskproApiPoster,
    title: "Task Pro REST API",
    discription: {
      en: "This project implements the server part of the TaskPro application. Allows you to securely store user data in the database and quickly process requests from the front end.",
      uk: "Цей проект впроваджує серверну частину додатку TaskPro. Він дозволяє безпечно зберігати дані користувачів в базі даних та швидко обробляти запити з фронтенду.",
    },
    techIcon: [nodejs, express, mongodb, mongoose],
    role: "developer",
  },
  {
    id: 7,
    poster: phonebookPoster,
    title: "Phone Book",
    discription: {
      en: "Application for safe storage of contacts. A convenient interface allows you to create, edit, and delete contacts that are protected by a secure authorization system.",
      uk: "Додаток для безпечного зберігання контактів. Зручний інтерфейс дозволяє створювати, редагувати та видаляти контакти, які захищені надійною системою авторизації.",
    },
    techIcon: [react, redux, js, material, webpack, styled],
    role: "developer",
  },
  // Design Start
  {
    id: 8,
    poster: cleaningServicekPoster,
    title: "Cleaning service webservice",
    discription: {
      en: "Clean Up is a web service created to help the cleaning company promote business, to stand out from the competition, and attract new customers. The website is designed to provide potential clients with information about the cleaning company's services, pricing, and contact information.",
      uk: "Clean Up — веб-сервіс, створений для того, щоб допомогти клінінговій компанії просувати бізнес, виділитися серед конкурентів і залучити нових клієнтів. Сайт призначений для надання потенційним клієнтам інформації про послуги клінінгової компанії, ціни та контактну інформацію.",
    },
    techIcon: [figma],
    role: "designer",
  },
  {
    id: 9,
    poster: supermarketPoster,
    title: "supermarket APP",
    discription: {
      en: "Buyland is a mobile app that helps shoppers save time. Product scanning features, automatic payment integration, and digital receipts enable customers to enjoy a faster, more efficient, and more enjoyable shopping experience. With Buyland, users can say goodbye to long lines and enjoy all the benefits of modern shopping at their fingertips.",
      uk: "Buyland — мобільний додаток, який допомагає покупцям економити час. Функції сканування продуктів, автоматична інтеграція платежів і цифрові квитанції дозволяють клієнтам насолоджуватися швидшими, ефективнішими та приємнішими покупками. З Buyland користувачі можуть попрощатися з довгими чергами та насолодитися всіма перевагами сучасного шопінгу під рукою.",
    },
    techIcon: [figma],
    role: "designer",
  },
  {
    id: 10,
    poster: libraryPoster,
    title: "library app",
    discription: {
      en: "Mini-project for the library app. I designed onboarding and main pages using Figma. In addition, I added some simple yet delightful animations with ProtoPie to make the interface come to life!",
      uk: "Міні-проект для бібліотечного додатку. Я розробив початкову та головну сторінки за допомогою Figma. Крім того, я додав кілька простих, але чудових анімацій за допомогою ProtoPie, щоб інтерфейс ожив!",
    },
    techIcon: [figma],
    role: "designer",
  },
  {
    id: 11,
    poster: iTSchooPoster,
    title: "IT School dashboard",
    discription: {
      en: "Mini-project dashboard for IT school.",
      uk: "Інформаційна панель міні-проекту для ІТ-школи.",
    },
    techIcon: [figma],
    role: "designer",
  },
  {
    id: 12,
    poster: landingPageWatchShopPoster,
    title: "Landing page for watch shop",
    discription: {
      en: "Design project for the luxury watch company, which was completed as part of my UX/UI design course. I designed a landing page using Figma. In addition, I added some simple yet delightful animations in Figma to make the interface come to life!",
      uk: "Дизайн-проект для компанії з виробництва розкішних годинників, який був завершений у рамках мого курсу дизайну UX/UI. Я створив цільову сторінку за допомогою Figma. Крім того, я додав кілька простих, але чудових анімацій у Figma, щоб оживити інтерфейс!",
    },
    techIcon: [figma],
    role: "designer",
  },
  {
    id: 13,
    poster: flowersDeliveryAppPoster,
    title: "Flowers delivery app",
    discription: {
      en: "Mini-project for the flower app. I designed onboarding, registration, main page and card using Figma. In addition, I added some simple yet delightful animations with Figma to make the video!",
      uk: "Міні-проект для квіткового додатку. Я розробив адаптацію, реєстрацію, головну сторінку та картку за допомогою Figma. Крім того, я додав кілька простих, але чудових анімацій за допомогою Figma, щоб зробити відео!",
    },
    techIcon: [figma],
    role: "designer",
  },
  {
    id: 14,
    poster: redesignRealEstateWebsSite,
    title: "redesign real estate websITE",
    discription: {
      en: "Redesign project for a real estate company website.",
      uk: "Проект редизайну сайту ріелторської компанії.",
    },
    techIcon: [figma],
    role: "designer",
  },
];
