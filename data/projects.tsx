import html from '../public/svg/html5.svg';
import css from '../public/svg/css.svg';
import js from '../public/svg/javascript.svg';
import react from '../public/svg/react.svg';
import redux from '../public/svg/redux.svg';
import axios from '../public/svg/axios.svg';
import next from '../public/svg/next.js.svg';
import nodejs from '../public/svg/nodejs.svg';
import express from '../public/svg/express.svg';
import mongoose from '../public/svg/mongoose.svg';
import mongodb from '../public/svg/mongodb.svg';
import webpack from '../public/svg/webpack.svg';
import parcel from '../public/svg/parcel.svg';
import vite from '../public/svg/vite.svg';
import sass from '../public/svg/icons8-sass 1.svg'
import styled from '../public/svg/styled components.svg';
import material from '../public/svg/material ui.svg';
import figma from '../public/svg/figma.svg';

export const projects: Project[] = [
    {
        id: 1,
        poster: '',
        title: 'Task Pro',
        discription: '',
        techIcon: [react, redux, material, styled, vite, axios]
    },
    {
        id: 2,
        poster: '',
        title: 'Filmoteka',
        discription: '',
        techIcon: [html, css, js, sass, axios, webpack]
    },
    {
        id: 3,
        poster: '',
        title: 'Taobao',
        discription: '',
        techIcon: [next, css, figma, vite]
    },
    {
        id: 4,
        poster: '',
        title: 'Web studio',
        discription: '',
        techIcon: [html, css, sass, js, figma]
    },
    {
        id: 5,
        poster: '',
        title: 'Ice creame',
        discription: '',
        techIcon: [html, css, sass, js, figma, parcel]
    },
    {
        id: 6,
        poster: '',
        title: 'Task Pro REST API',
        discription: '',
        techIcon: [nodejs, express, mongodb, mongoose]
    },
    {
        id: 7,
        poster: '',
        title: 'Phone Book',
        discription: '',
        techIcon: [react, redux, js, material, webpack, styled]
    },
];