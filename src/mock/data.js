import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rifky Prayanta', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Personal Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my Name is',
  name: 'Rifky Prayanta',
  subtitle: 'I`m Freelance Software Developer',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'dp.jpg',
  paragraphOne: 'Hello, my name is',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Covid Worldwide Track',
    info:
      'This App based on website built with React.Js. It`s can help people to see live graph of covid case by worldwide. You can see realtime case by each country around the world',
    info2: '',
    url: 'https://goofy-goodall-cdadb0.netlify.app/',
    repo: 'https://github.com/Rifkyprayanta/covid-19-worldwide', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'E-Commerce MERN Stack',
    info:
      'This App based on website built with MERN Stack Technology. MERN stack is mean MongoDb as a databases, E for Express.Js as a JS Framework, R for React.Js as a front end framework, and N for Node.Js as a JS framework serverside. It`s can help seller to sell their product by online, and manage their transaction',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Indonesian Covid Case (cooming soon)',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
