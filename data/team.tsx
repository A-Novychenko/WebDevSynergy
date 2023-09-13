import novichenko from '../public/Ourteam/Novichenko.png'
import kharlan from '../public/Ourteam/Kharlan.png'
import borysov from '../public/Ourteam/Borysov.png'
import veryk from '../public/Ourteam/Veryk.png'
import babenko from '../public/Ourteam/Babenko.png'
import kopytko from '../public/Ourteam/Kopytko.png'

import linkedin from '../public/Ourteam/social_linkedin.svg'
import telegram from '../public/Ourteam/telegram.svg'
import github from '../public/Ourteam/github.svg'
import resume from '../public/Ourteam/resume.svg'


export const arrayTeam = [
    {
        textFields: {
            uk: { firstName: "Олександр", lastName: "Новіченко" },
            en: { firstName: "Oleksandr", lastName: "Novychenko" },
        },
        id: 1,
        img: novichenko,
        profession: 'Fullstack developer, Team Lead',
        linkedin: linkedin,
        telegram: telegram,
        github: github,
        resume: resume,

    },
    {
        textFields: {
            uk: { firstName: "Едуард", lastName: "Харлан" },
            en: { firstName: "Eduard", lastName: "Kharlan" },
        },
        id: 2,
        img: kharlan,
        name: '',
        profession: 'Frontend Developer, Product Manager',
        linkedin: linkedin,
        telegram: telegram,
        github: github,
        resume: resume,

    },
    {
        textFields: {
            uk: { firstName: "В'ячеслав ", lastName: "Борисов" },
            en: { firstName: "Viacheslav", lastName: "Borysov" },
        },
        id: 3,
        img: borysov,
        name: '',
        profession: 'Fullstack developer, Scrum Master',
        linkedin: linkedin,
        telegram: telegram,
        github: github,
        resume: resume,

    },
    {
        textFields: {
            uk: { firstName: "Олександр", lastName: "Верик" },
            en: { firstName: "Oleksandr", lastName: "Veryk " },
        },
        id: 4,
        img: veryk,
        name: '',
        profession: 'Frontend Developer, Manual QA Engineer',
        linkedin: linkedin,
        telegram: telegram,
        github: github,
        resume: resume,

    },
    {
        textFields: {
            uk: { firstName: "Віта", lastName: "Бабенко" },
            en: {
                firstName: "Vita", lastName: "Babenko"
            },
        },
        id: 5,
        img: babenko,
        name: '',
        profession: 'Front-end Developer, Content Manager',
        linkedin: linkedin,
        telegram: telegram,
        github: github,
        resume: resume,

    },
    {
        textFields: {
            uk: { firstName: "Юлія", lastName: "Копитко" },
            en: { firstName: "Julia ", lastName: " Kopytko" },
        },
        id: 6,
        img: kopytko,
        name: '',
        profession: 'UX/UI Designer',
        linkedin: linkedin,
        telegram: telegram,
        github: github,
        resume: resume,

    },
]