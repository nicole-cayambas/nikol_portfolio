import AboutMe from "./components/windows/AboutMe";
import Skills from "./components/windows/Skills";

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
    isOpen: true,
    color: "red",
    position: { x: 615, y: 154 },
    zIndex: 1,
    shortcut: "👨‍🚀",
    width: maxWindowWidth,
    height: maxWindowHeight,
  },
  {
    id: "skills",
    title: "Skills and Tools",
    type: "program",
    component: Skills,
    isOpen: true,
    color: "whitish",
    position: { x: 870, y: 136 },
    zIndex: 100,
    shortcut: "🧰",
    width: maxWindowWidth,
    height: maxWindowHeight,
  },
  {
    id: "myWorks",
    title: "My Works",
    type: "program",
    component: null,
    isOpen: true,
    color: "mint",
    position: { x: 570, y: 36 },
    zIndex: 1,
    shortcut: "🧱",
    width: maxWindowWidth,
    height: maxWindowHeight,
  },
  {
    id: "contact",
    title: "Contact",
    type: "program",
    component: null,
    isOpen: true,
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
    isOpen: true,
    color: "orange",
    position: { x: 335, y: 70 },
    zIndex: 1,
    shortcut: "👷‍♂️",
    width: maxWindowWidth,
    height: maxWindowHeight,
  },
];

export const skillsConfig = {
  programming: [
    {
      name: "PHP",
      level: 10, // out of 10
      years: 5, // modify based on year started
    },
    {
      name: "Javascript",
      level: 10, // out of 10
      years: 5, // modify based on year started
    },
  ],
  design: [
    {
      name: "Figma",
      level: 3,
      years: "<1",
    },
    {
      name: "Photoshop",
      level: 8,
      years: "10",
    },
  ],
};
