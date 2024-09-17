import cooking1 from "../SVGs/cooking1.svg";
import cooking2 from "../SVGs/cooking2.svg";
import cooking3 from "../SVGs/cooking3.svg";
import finance1 from "../SVGs/finance1.svg";
import finance2 from "../SVGs/finance2.svg";
import finance3 from "../SVGs/finance3.svg";
import office1 from "../SVGs/office1.svg";
import office2 from "../SVGs/office2.svg";
import office3 from "../SVGs/office3.svg";
import personal1 from "../SVGs/personal1.svg";
import personal2 from "../SVGs/personal2.svg";
import personal3 from "../SVGs/personal3.svg";
import sports1 from "../SVGs/sports1.svg";
import sports2 from "../SVGs/sports2.svg";
import sports3 from "../SVGs/sports3.svg";
import travel1 from "../SVGs/travel1.svg";
import travel2 from "../SVGs/travel2.svg";
import travel3 from "../SVGs/travel3.svg";

const sectionLookups = [
  {
    sectionId: 1,
    name: "Personal",
    value: "personal",
    color: "#f5b042",
  },
  {
    sectionId: 2,
    name: "Work",
    value: "work",
    color: "#42f593",
  },
  {
    sectionId: 3,
    name: "Cooking",
    value: "cooking",
    color: "#3caaf0",
  },
  {
    sectionId: 4,
    name: "Sports",
    value: "sports",
    color: "#a55beb",
  },
  {
    sectionId: 5,
    name: "Travel",
    value: "travel",
    color: "#e858c2",
  },
  {
    sectionId: 6,
    name: "Finance",
    value: "finance",
    color: "#e8e658",
  },
];

const AvatarLookups = [
  {
    name: "Frying Pan",
    img: cooking1,
    category: 3,
  },
  {
    name: "Fried Eggs",
    img: cooking2,
    category: 3,
  },
  {
    name: "Dish",
    img: cooking3,
    category: 3,
  },
  {
    name: "Money Flow",
    img: finance1,
    category: 6,
  },
  {
    name: "Bills",
    img: finance2,
    category: 6,
  },
  {
    name: "Savings",
    img: finance3,
    category: 6,
  },
  {
    name: "Office Building",
    img: office1,
    category: 2,
  },
  {
    name: "Briefcase",
    img: office2,
    category: 2,
  },
  {
    name: "Professional",
    img: office3,
    category: 2,
  },
  {
    name: "Info",
    img: personal1,
    category: 1,
  },
  {
    name: "User",
    img: personal2,
    category: 1,
  },
  {
    name: "Home",
    img: personal3,
    category: 1,
  },
  {
    name: "FootBall",
    img: sports1,
    category: 4,
  },
  {
    name: "Tennis",
    img: sports2,
    category: 4,
  },
  {
    name: "VolleyBall",
    img: sports3,
    category: 4,
  },
  {
    name: "Family Trip",
    img: travel1,
    category: 5,
  },
  {
    name: "Map",
    img: travel2,
    category: 5,
  },
  {
    name: "Luggage",
    img: travel3,
    category: 5,
  },
];

const initialColumnsData = [
  {
    sectionName: "Personal",
    sectionId: 1,
    sectionColor: "#f5b042",
    cards: [
      {
        id: new Date().getTime(),
        title: "Task 1",
        content: "This is task 1 content.",
        avatar: personal1,
        dateTime: new Date(),
        section: "personal",
      },
      {
        id: new Date().getTime(),
        title: "Task 2",
        content: "This is task 1 content.",
        avatar: personal2,
        dateTime: new Date(),
        section: "personal",
      },
      {
        id: new Date().getTime(),
        title: "Task 3",
        content: "This is task 1 content.",
        avatar: personal3,
        dateTime: new Date(),
        section: "personal",
      },
    ],
  },
  {
    sectionName: "Sports",
    sectionId: 4,
    sectionColor: "#a55beb",
    cards: [
      {
        id: new Date().getTime(),
        title: "Task 4",
        content: "This is task 1 content.",
        avatar: sports1,
        dateTime: new Date(),
        section: "sports",
      },
      {
        id: new Date().getTime(),
        title: "Task 5",
        content: "This is task 1 content.",
        avatar: sports2,
        dateTime: new Date(),
        section: "sports",
      },
    ],
  },
  {
    sectionName: "Cooking",
    sectionId: 3,
    sectionColor: "#3caaf0",
    cards: [
      {
        id: new Date().getTime(),
        title: "Task 6",
        content: "This is task 1 content.",
        avatar: cooking1,
        dateTime: new Date(),
        section: "cooking",
      },
    ],
  },
];
export { sectionLookups, AvatarLookups, initialColumnsData };
