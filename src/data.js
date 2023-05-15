// file to contain Projects, Skills and Work experience to be read in the Project and Skill Components respectively.

// skills
export const skills = [
  "JavaScript",
  "HTML",
  "CSS/SASS",
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
    description: "ReactJS web app based on an innovative, sports-related idea. Using react-bootstrap for built-in components and bootstrap/SASS for styles. Work in progress, stay tuned!",
    image: "./sportmate-app.png",
    link: "https://github.com/NeilanshTriesToCode/sportMate",
  },
  {
    id: "equiFoodApp",
    name: "EquiFood App",
    stack: "Flutter, firebase",
    description: "Capstone Project. As a group, developed a mobile app for restaurants to sell leftover food as 'donations' at discounted prices to reduce food wastage. Has 3 different user types. Features a minimalistic UI.",
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

// work experience
export const experience = [
  {
    id: 'ltr',
    title: 'Learning Technologies Rover (LTR)',
    company: 'Centre for Teaching and Learning, UBC Okanagan',
    link: 'https://ctl.ok.ubc.ca/',
    location: 'Kelowna, BC, Canada',
    date: 'January 2022 - April 2022',
    description: [
      'Interned as Learning Technologies Rover under the co-op program.',
      'Assisted faculty members with using and troublshooting Learning Technologies used at the university.',
      'Provided 1-to-1 support in-person, on call via Zoom or phone, or ServiceNow ticketing system.',
      'Helped instructors ensure smooth delivery of lectures and course materials.',
    ]
  },
  {
    id: 'fsdi',
    title: 'Full Stack Developer Intern',
    company: 'VisionBox Inc.',
    link: 'https://www.visionbox.ai/',
    location: 'Burnaby, BC, Canada',
    date: 'September 2021 - December 2021',
    description: [
      'Interned as Full Stack Developer at a startup.',
      'Helped develop the frontend user interface for a desktop app.',
      'Used ReactJS and frameworks such as tailwindCSS, Rsuite for a better user experience.',
      'Attended daily meetings with the supervisor to discuss the project, suggest ideas and receive feedback.',
    ]
  }
]

