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
  },
];
