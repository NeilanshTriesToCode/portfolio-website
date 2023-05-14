// file to contain Projects and Skills to be read in the Project and Skill Components respectively.

// skills
export const skills = [
  "JavaScript",
  "HTML/CSS",
  "SASS",
  "ReactJS",
  "Flutter",
  "git/GitHub",
  "firebase",
  "MySQL"
];

// projects
export const projects = [
  {
    id: "sportMateApp",
    name: "SportMate",
    stack: "ReactJS, firebase",
    description: "ReactJS web app based on an innovative, sports-related idea. Using the react-bootstrap for built-in components and bootstrap/SASS for styles. Work in progress, stay tuned!",
    image: "./sportmate-app.png",
    link: "https://github.com/NeilanshTriesToCode/sportMate",
  },
  {
    id: "equiFoodApp",
    name: "EquiFood App",
    stack: "Flutter, firebase",
    description: "Capstone Project. Developed a mobile app for restaurants to sell leftover food as 'donations' at a discounted price to reduce food wastage. Has 3 different user types. Features a minimalistic UI.",
    image: "./equifood-app.png",
    link: "https://github.com/COSC-499-EquiFood-B/EquiFoodApp-B",
  },
  {
    id: "shoppingCart",
    name: "React Shopping-Cart",
    stack: "ReactJS",
    description: "A shopping cart app that allows users to browse through products/categories, apply filters, add/remove/edit items in the cart. Employs complex React hooks such as useReducer and useContext.",
    image: "./shopping-cart.gif",
    link: "https://tinyurl.com/React-Shopping-Cart",
  },
  {
    id: "chatApp",
    name: "Web Chat App",
    stack: "ReactJS, firebase",
    description: "Web Chat App made as part of Internshala's ReactJS course. Allows users to sign-in using Google or Facebook, create chat rooms, send messages, attach images/files/audio, edit avatars.",
    image: "./chat-app.gif",
    link: "https://tinyurl.com/React-Chat-App",
  },
];

