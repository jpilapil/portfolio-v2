// first and last name on the work page
const name = {
  firstName: "JUSTIN",
  lastName: "PILAPIL",
};

const test = {
  firstName: "testing",
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
  {
    id: 4,
    name: "Function Library",
    desc:
      "A single page function library designed for personal use to assist in continued learning for future programming languages.",
    link: "https://github.com/jpilapil/react-utility-library",
  },
];

export { name, test, work };
