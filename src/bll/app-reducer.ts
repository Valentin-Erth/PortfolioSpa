import {v1} from 'uuid'
import react from "../assets/image/imgFromSkills/react.svg";
import redux from "../assets/image/imgFromSkills/redux.svg";
import ts from "../assets/image/imgFromSkills/ts.svg";
import js from "../assets/image/imgFromSkills/js.svg";
import storybook from "../assets/image/imgFromSkills/storybook.svg";
import html from "../assets/image/imgFromSkills/html.svg";
import css from "../assets/image/imgFromSkills/css.svg";
import sass from "../assets/image/imgFromSkills/sass.svg";
import mui from "../assets/image/imgFromSkills/mui.svg";
import rest from "../assets/image/imgFromSkills/rest.svg";
import unitTest from "../assets/image/imgFromSkills/unitTest.svg";
import git from "../assets/image/imgFromSkills/git.svg";
import tdd from "../assets/image/imgFromSkills/tdd.svg";
import flux from "../assets/image/imgFromSkills/flux.svg";
import yarn from "../assets/image/imgFromSkills/yarn.svg";
import figma from "../assets/image/imgFromSkills/figma.svg";
import todoImg from "../assets/image/imgProjects/todo.jpg";
import socialImg from "../assets/image/imgProjects/social.jpg";
import cardsImg from "../assets/image/imgProjects/cards.png";

export const initialState: InitialStateType = {
    main: {
        firstName: 'Valentin',
        lastName: 'Kozlov',
        description: 'Frontend Developer based In Russia'
    },
    skills: {
        title: 'Skills',
        description: 'I Work Hard to Improve My Skills Regularly',
        data: [
            {
                id: v1(),
                title: 'REACT',
                img: react
            },
            {
                id: v1(),
                title: 'REDUX',
                img: redux
            },
            {
                id: v1(),
                title: 'TS',
                img: ts
            },
            {
                id: v1(),
                title: 'JS',
                img: js
            },
            {
                id: v1(),
                title: 'STORYBOOK',
                img: storybook
            },
            {
                id: v1(),
                title: 'HTML',
                img: html
            },
            {
                id: v1(),
                title: 'CSS',
                img: css
            },
            {
                id: v1(),
                title: 'SASS/SCSS',
                img: sass
            },
            {
                id: v1(),
                title: 'MUI',
                img: mui
            },
            {
                id: v1(),
                title: 'REST API',
                img: rest
            },
            {
                id: v1(),
                title: 'UNIT TEST',
                img: unitTest
            },
            {
                id: v1(),
                title: 'GIT',
                img: git
            },
            {
                id: v1(),
                title: 'TDD',
                img: tdd
            },
            {
                id: v1(),
                title: 'FLUX',
                img: flux
            },
            {
                id: v1(),
                title: 'YARN',
                img: yarn
            },
            {
                id: v1(),
                title: 'FIGMA',
                img: figma
            }

        ]
    },
    about: {
        title: 'About Me',
        description: 'A Passionate Developer Who Loves to Code',
        textMe: '' +
            'Greetings! I am a frontend developer. With' +
            'more than 1 year of development experience on React/Next JS using' +
            'Redux, TypeScript, Storybook.\n' +
            'Now I am improving my skills in this direction and expanding them with new technologies. I\'m downloading English. I plan to learn React Native.'
    },
    projects: {
        title: 'Projects',
        description: 'I have Worked On',
        data: [
            {
                id: v1(),
                title: 'To-Do List',
                link: 'https://todolist-rtk-three.vercel.app',
                description: 'Create, edit and delete TO-DO Lists, manage tasks that can be customized for you and your team',
                img: {
                    backgroundImage: `url(${todoImg})`
                }
            },
            {
                id: v1(),
                title: 'Social Network',
                link: '#',
                description: 'A social network that implements adding and deleting friends, authorization, sending messages...',
                img: {
                    backgroundImage: `url(${socialImg})`,
                }
            },
            {
                id: v1(),
                title: 'Cards Training',
                link: 'https://storybook-cards-training.vercel.app',
                description: 'each user can post their own pack of cards, helping others to gain new knowledge...',
                img: {
                    backgroundImage: `url(${cardsImg})`,
                }
            }
        ]
    },
    contact: {
        title: 'Contact',
        description: 'I Want to Hear from You'
    },
}

export const appReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'xxx': {
            return state
        }
        default: {
            return state
        }

    }
}


//types
type InitialStateType = {
    main: MainType
    skills: SkillsType
    about: AboutType
    projects: ProjectsType
    contact: ContactsType
}
export type MainType = {
    firstName: string
    lastName: string
    description: string
}
export type SkillType = {
    id: string,
    title: string,
    img: string
}
export type SkillsType = {
    title: string
    description: string
    data: SkillType[]
}
export type AboutType = {
    title: string,
    description: string,
    textMe: string
}
export type ProjectType = {
    id: string,
    title: string,
    link: string
    description: string,
    img: {
        backgroundImage: string
    }
}
export type ProjectsType = {
    title: string,
    description: string,
    data: ProjectType[]
}
export type ContactsType = {
    title: string
    description: string
}
export type dataSendEmailType = {
    name: string
    email: string
    message: string
}