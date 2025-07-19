import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import github from './github.png';
import github_dark from './github_dark.png';
import linkedin from './linkedin.png';
import linkedin_dark from './linkedin_dark.png';

// 添加前端技术图标导入
import react from './react.svg';
import javascript from './javascript.svg';
import typescript from './typescript.svg';
import html from './html.svg';
import css from './css.svg';
import tailwindcss from './tailwindcss.svg';
import figma_svg from './figma.svg';
import nextjs from './nextjs.svg';
import python from './python.svg';

// 添加后端和数据库技术图标导入
import nodejs from './nodejs.svg';
import express from './express.svg';
import nestjs from './nestjs.svg';
import prisma from './prisma.svg';
import postgresql from './postgresql.svg';

// 添加工具和DevOps技术图标导入
import git_svg from './git.svg';
import yarn from './yarn.svg';
import pnpm from './pnpm.svg';
import docker from './docker.svg';
import aws from './aws.png';
import postman from './postman.svg';

export const assets = {
    github,
    github_dark,
    linkedin,
    linkedin_dark,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    
    // Frontend skills
    react,
    javascript,
    typescript,
    html,
    css,
    tailwindcss,
    figma_svg,
    nextjs,
    python,

    // Backend and Database skills
    nodejs,
    express,
    nestjs,
    prisma,
    postgresql,

    // Tools and DevOps skills
    git_svg,
    yarn,
    pnpm,
    docker,
    aws,
    postman
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Technical Skills', description: 'React, Node.js, Next.js, Prisma and more.' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects.' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Master of Computing, University of Adelaide.' }
];

// 修改 frontendSkillsData - 添加HTML、CSS、Python，移除Figma
export const frontendSkillsData = [
    {
        icon: assets.react,
        title: 'React'
    },
    {
        icon: assets.nextjs,
        title: 'Next.js'
    },
    {
        icon: assets.tailwindcss,
        title: 'Tailwind CSS'
    },
    {
        icon: assets.html,
        title: 'HTML'
    },
    {
        icon: assets.css,
        title: 'CSS'
    },
    {
        icon: assets.javascript,
        title: 'JavaScript'
    },
    {
        icon: assets.typescript,
        title: 'TypeScript'
    },
    {
        icon: assets.python,
        title: 'Python'
    }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];

// 添加后端和数据库技能数据
export const backendSkillsData = [
    {
        icon: assets.nodejs,
        title: 'Node.js'
    },
    {
        icon: assets.express,
        title: 'Express'
    },
    {
        icon: assets.nestjs,
        title: 'NestJS'
    },
    {
        icon: assets.prisma,
        title: 'Prisma'
    },
    {
        icon: assets.postgresql,
        title: 'PostgreSQL'
    },
    {
        icon: assets.mongodb,
        title: 'MongoDB'
    }
];

// 添加工具和DevOps技能数据 - 添加Figma、Postman、GitHub，修改AWS为EC2
export const toolsSkillsData = [
    {
        icon: assets.git,
        title: 'Git'
    },
    {
        icon: assets.github,
        title: 'GitHub'
    },
    {
        icon: assets.vscode,
        title: 'VSCode'
    },
    {
        icon: assets.figma,
        title: 'Figma'
    },
    {
        icon: assets.yarn,
        title: 'Yarn'
    },
    {
        icon: assets.pnpm,
        title: 'pnpm'
    },
    {
        icon: assets.postman,
        title: 'Postman'
    },
    {
        icon: assets.docker,
        title: 'Docker'
    },
    {
        icon: assets.aws,
        title: 'AWS EC2'
    }
];