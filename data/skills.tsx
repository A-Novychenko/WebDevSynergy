import html from '../public/svg/html5.svg';
import css from '../public/svg/css.svg';
import js from '../public/svg/javascript.svg';
import react from '../public/svg/react.svg';
import ts from '../public/svg/typescript.svg';
import redux from '../public/svg/redux.svg';
import zustand from '../public/svg/zustand.svg';
import axios from '../public/svg/axios.svg';
import next from '../public/svg/next.js.svg';
import nodejs from '../public/svg/nodejs.svg';
import express from '../public/svg/express.svg';
import mongoose from '../public/svg/mongoose.svg';

export interface DataItem {
    id: number;
    logo: string;
    name: string;
}
export const arraySkills: DataItem[] = [
    {
        id: 1,
        logo: html,
        name: 'html',
    },
    {
        id: 2,
        logo: css,
        name: 'css',
    },
    {
        id: 3,
        logo: js,
        name: 'java skript',
    },
    {
        id: 4,
        logo: react,
        name: 'react',
    },
    {
        id: 5,
        logo: ts,
        name: 'type script',
    },
    {
        id: 6,
        logo: redux,
        name: 'redux',
    },
    {
        id: 7,
        logo: zustand,
        name: 'zustand',
    },
    {
        id: 8,
        logo: axios,
        name: 'axios',
    },
    {
        id: 9,
        logo: next,
        name: 'next.js',
    },
    {
        id: 10,
        logo: nodejs,
        name: 'nodejs ',
    },
    {
        id: 11,
        logo: express,
        name: 'express',
    },
    {
        id: 12,
        logo: mongoose,
        name: 'mongoose',
    },





]