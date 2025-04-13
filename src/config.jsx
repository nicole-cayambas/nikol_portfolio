import AboutMe from "./components/windows/AboutMe";

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
  },
  {
    id: "myWorks",
    title: "My Works",
    type: "program",
    component: null,
    isOpen: true,
    color: "mint",
    position: { x: 570, y: 336 },
  },
  {
    id: "contact",
    title: "Contact",
    type: "program",
    component: null,
    isOpen: true,
    color: "yellow",
    position: { x: 228, y: 283 },
  },
  {
    id: "wip",
    title: "Work in progress",
    type: "folder",
    component: null,
    isOpen: true,
    color: "orange",
    position: { x: 335, y: 70 },
  },
];
