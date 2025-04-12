
import hero2 from './7504549_3675489.jpg'
import hero3 from './5798429_2968383.jpg'
import hero4 from './development-concept-illustration.png'
import hero5 from './13247275_5180200-removebg-preview (1).png'
import JSIcon from "./icons8-javascript-96.png"
import reactIcon from "./icons8-react-96.png"
import nodeJSIcon from "./icons8-nodejs-96.png"
import expressJsIcon from "./icons8-express-js-96.png"
import postgreSQLIcon from "./icons8-postgresql-96.png"
import mongoDbIcon from './icons8-mongodb-96.png'
import tailwindcssIcon from './icons8-tailwind-css-96.png'
import gitIcon from './icons8-git-96.png'
import pythonIcon from './icons8-python-96.png'
import githubIcon from './icons8-github-64.png'
import linkedInIcon from './icons8-linkedin-96.png'
import leetcodeIcon from './icons8-leetcode-96.png'
// import s_media_tamplate from './Picsart_25-04-10_19-31-44-830.jpg'
import s_media_tamplate from './s_media_tamplate.png'
// import farmRent_tamplate from './13247275_5180200-removebg-preview.png'
import farmRent_tamplate from './farmRent_tamplate.png'
import view from './icons8-view-96.png'
export const images = {

    hero2,
    hero3,
    hero4,
    hero5,
    githubIcon,
    linkedInIcon,
    leetcodeIcon,
    s_media_tamplate,
    farmRent_tamplate,
    view
}
export const skils = [

    { name: "Javascript", img: JSIcon },
    { name: "React", img: reactIcon },
    { name: "Node.js", img: nodeJSIcon },
    { name: "Express.js", img: expressJsIcon },
    { name: "PostgreSQL", img: postgreSQLIcon },
    { name: "MongoDB", img: mongoDbIcon },
    { name: "Tailwindcss", img: tailwindcssIcon },
    { name: "Git", img: gitIcon },
    { name: "Python", img: pythonIcon },
    { name: "Python", img: pythonIcon },
]
export const links = {
    github: "https://github.com/ajithkumar-velu",
    linkedIn: "https://www.linkedin.com/in/ajithkumarv1",
    leetcode: "https://leetcode.com/u/ajithajk46/"
}
export const projects = [
    {
        name: "S-Media",
        image: s_media_tamplate,
        content: "S-Media is a modern MERN-based platform for sharing posts, building profiles, and social networking.",
        tools: ["React", "Node.js", "Express.js", "MongoDb", "Tailwindcss", "Daisyui"],
        links: {
            github: "https://github.com/ajithkumar-velu/S-Media",
            live: "https://s-media-frontend.onrender.com/"
        }
    },

    {
        name: "Farm-Rent",
        image: farmRent_tamplate,
        content: "Farm-Rent is a web application for farmers to rent out their machines and equipment",
        tools: ["React", "Node.js", "Express.js", "MongoDB", "Tailwindcss", "Daisyui"],
        links: {
            github: "https://github.com/ajithkumar-velu/farmRent",
            live: "https://farm-rent-frontend.vercel.app/"
        }
    },
]