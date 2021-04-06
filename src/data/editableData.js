// first and last name on the work page
const name = {
  firstName: "JUSTIN",
  lastName: "PILAPIL",
};

const test = {
  firstName: "suh dude",
  lastName: "fuck you",
};

// this is the data for your projects that show up on the work page
const work = [
  {
    id: 1,
    name: "Key : Value Pairs",
    desc: "A platform that matches users based on technological interests.",
    link: "https://keyvaluepairs.herokuapp.com",
  },
  {
    id: 2,
    name: "White Bear",
    desc:
      "A flash card style CRUD application that aids in memorization using spaced repetition and memorable imagery.",
    link: "https://whitebearapp.herokuapp.com/",
  },
  {
    id: 3,
    name: "Stay Hydrated",
    desc:
      "A lightweight system tray application built with Electron.js to remind you to drink water.",
    link: "https://github.com/jpilapil/stay-hydrated",
  },
];

// paragraphs on about page
const aboutBio1 = `Hey, my name is Justin, a Las Vegas based software developer with strong design aesthetic and principles. I have over 2 years of professional experience and consider myself a problem solver with creative visual solutions.`;
const aboutBio2 = `I enjoy exploring possibilities and am constantly searching for challenges to improve my skills. I belive that my job as a developer is more than just creating eye-catching, easy to use applications. It is more about closing the gap between the user and their goals while combining business goals with creative solutions.`;

const aboutBio3 = `Peep my resume or contact me here if you would like to learn more about me.`;

// work experience on about page
const experience = [
  {
    id: 1,
    title: "Front End Engineer",
    company: "IONnovate",
    tenure: "September 2020 - Present",
    location: "Remote",
  },
  {
    id: 2,
    title: "Web Developer (Contract)",
    company: "Code Legion",
    tenure: "December 2020 - February 2021",
    location: "Remote",
  },
  {
    id: 3,
    title: "Web Developer (Contract)",
    company: "Refined Living",
    tenure: "January 2019 - December 2020",
    location: "Las Vegas, NV",
  },
];

export { name, test, work, aboutBio1, aboutBio2, aboutBio3, experience };
