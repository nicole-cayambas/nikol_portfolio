import AboutMe from "./components/windows/AboutMe";
import Contact from "./components/windows/Contact";
import Skills from "./components/windows/Skills";
import Works from "./components/windows/Works";
import LargeAutocomplete from "./mini-projects/LargeAutocomplete";

export const titleBarHeight = "56px";
export const maxWindowWidth = "600px";
export const maxWindowHeight = "500px";

export const colorsConfig = {
  red: "#db423d",
  orange: "#ff7d4e",
  yellow: "#f9c65f",
  mint: "#a6d49c",
  "light-pink": "#fdc2be",
  "border-color": "#753851",
  whitish: "#ffedd6",
};

export const programsConfig = [
  {
    id: "aboutMe",
    title: "About Me",
    type: "program",
    component: AboutMe,
    isOpen: false,
    color: "red",
    position: { x: 615, y: 154 },
    zIndex: 1,
    shortcut: "👨‍🚀",
    width: maxWindowWidth,
    height: maxWindowHeight,
  },
  {
    id: "skills",
    title: "Skills & Tools",
    type: "program",
    component: Skills,
    isOpen: false,
    color: "whitish",
    position: { x: 870, y: 136 },
    zIndex: 5,
    shortcut: "🧰",
    width: maxWindowWidth,
    height: maxWindowHeight,
  },
  {
    id: "myWorks",
    title: "My Works",
    type: "program",
    component: Works,
    isOpen: false,
    color: "mint",
    position: { x: 180, y: 36 },
    zIndex: 1,
    shortcut: "🧱",
    width: "1000px",
    height: "600px",
  },
  {
    id: "contact",
    title: "Contact",
    type: "program",
    component: Contact,
    isOpen: false,
    color: "yellow",
    position: { x: 228, y: 10 },
    zIndex: 1,
    shortcut: "📡",
    width: maxWindowWidth,
    height: maxWindowHeight,
  },
  {
    id: "wip",
    title: "Work in progress",
    type: "folder",
    component: null,
    isOpen: false,
    color: "orange",
    position: { x: 335, y: 70 },
    zIndex: 1,
    shortcut: "👷‍♂️",
    width: maxWindowWidth,
    height: maxWindowHeight,
  },
  {
    id: "largeAutocomplete",
    title: "Large Autocomplete",
    type: "program",
    component: LargeAutocomplete,
    isOpen: false,
    color: "mint",
    position: { x: 435, y: 100 },
    zIndex: 1,
    shortcut: "🔍",
    width: maxWindowWidth,
    height: maxWindowHeight,
  },
];

export const skillsConfig = {
  coding: [
    {
      name: "Php",
      years: 5, // modify based on year started
      logo: 'images/php.png'
    },
    {
      name: "Laravel",
      years: 5, // modify based on year started
      logo: 'images/laravel.png'
    },
    {
      name: "Zend/Laminas",
      years: 5, // modify based on year started
      logo: 'images/laminas.png'
    },
    {
      name: "JavaScript",
      years: 5, // modify based on year started
      logo: 'images/javascript.png'
    },
    {
      name: "React",
      years: 5, // modify based on year started
      logo: 'images/react.png'
    },
    {
      name: "Node",
      years: 5, // modify based on year started
      logo: 'images/node.png'
    },
    {
      name: "Material UI",
      years: 5, // modify based on year started
      logo: 'images/mui.png'
    },
    {
      name: "jQuery",
      years: 5, // modify based on year started
      logo: 'images/jquery.png'
    },
  ],
  design: [
    {
      name: "Figma",
      years: "<1",
      logo: 'images/figma.png'
    },
    {
      name: "Photoshop",
      years: "10",
      logo: 'images/photoshop.png'
    },
  ],
};

export const worksConfig = [
  {
    name: "Alienor",
    link: "https://alienor.org",
    image: "alienor.png",
  },
  {
    name: "Recruitment",
    link: "https://nmsrecruitment.nmsapps.com",
    image: "recruitment.png",
  },
  {
    name: "Club Thermal",
    link: "https://www.club-thermal.com",
    image: "lct.png",
  },
  {
    name: "CMA Taxi",
    link: "https://www.exament3p.fr",
    image: "cma.png",
  },
];
