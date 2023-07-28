import aStudies  from '../../../assets/ImgPortfolio/aStudies.png';
import Tracker from '../../../assets/ImgPortfolio/Tracker.png';
import formNegocio from '../../../assets/ImgPortfolio/formNegocios.png';
import Aluroni from '../../../assets/ImgPortfolio/Aluroni.png';
import Pokedex from '../../../assets/ImgPortfolio/Pokedex.png';

const CardData = [
    {
        imgUrl: Tracker,
        title: "Program Alura Tracker (Vue)",
        description:"Um programa para marcar o horário de estudo ou exercícios ",
        link:"https://a-track-flavioaluis.vercel.app/",
        link2:"https://github.com/flavioaluis/aTrack",
    },

    {
        imgUrl: aStudies,
        title: "Program Alura Studies (React)",
        description:"Um programa para marcar horários de estudos para o dia",
        link:"https://alura-studies-flax-gamma.vercel.app/",
        link2:"https://github.com/flavioaluis/aStudies",
    },

    {
        imgUrl: formNegocio,
        title: "Form de Negociação (Typescript)",
        description:"Formulário de negócios com data quantidade e valor",
        link:"https://form-negocios.vercel.app/",
        link2:"https://github.com/flavioaluis/formNegocios",
    },

    {
        imgUrl: Aluroni,
        title: "Aluroni (React + TypeScript + SCSS)",
        description:"Site de um restaurante de vários tipos de refeições",
        link:"https://aluroni-ashy.vercel.app/",
        link2:"https://github.com/flavioaluis/aluroni",
    },

    {
        imgUrl: Pokedex,
        title: "Pokedex (React + TypeScript + SCSS)",
        description:"Site de uma pokedex usando PokeApi, um sobre, com Login, com páginas públicas e uma private ",
        link:"https://pokedex-nine-delta-60.vercel.app/",
        link2:"https://github.com/flavioaluis/pokedex",
    }
];

export default CardData;