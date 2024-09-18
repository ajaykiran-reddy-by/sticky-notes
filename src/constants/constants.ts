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
        id: new Date().getTime() + Math.random(),
        title: "Groceries List",
        content: "Eggs, milk",
        avatar: personal1,
        dateTime: new Date(),
        section: 1,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "Reminder",
        content: "Call John",
        avatar: personal2,
        dateTime: new Date(),
        section: 1,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "Pending Tasks",
        content: "",
        avatar: personal3,
        dateTime: new Date(),
        section: 1,
      },
    ],
  },
  {
    sectionName: "Sports",
    sectionId: 4,
    sectionColor: "#a55beb",
    cards: [
      {
        id: new Date().getTime() + Math.random(),
        title: "FootBall",
        content: "tournament at 9pm today",
        avatar: sports1,
        dateTime: new Date(),
        section: 4,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "Tennis",
        content: "Buy Tennis racquet",
        avatar: sports2,
        dateTime: new Date(),
        section: 4,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "Things to buy",
        content: "Buy airpump for VolleyBall",
        avatar: sports3,
        dateTime: new Date(),
        section: 4,
      },
    ],
  },
  {
    sectionName: "Work",
    sectionId: 2,
    sectionColor: "#42f593",
    cards: [
      {
        id: new Date().getTime() + Math.random(),
        title: "Update Tempo",
        content: "by the EOD",
        avatar: office1,
        dateTime: new Date(),
        section: 2,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "UI tasks",
        content: "Add/Edit Modes, Delete functionality",
        avatar: office2,
        dateTime: new Date(),
        section: 2,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "Leave Req",
        content: "Send a mail to Manager about leave req",
        avatar: office3,
        dateTime: new Date(),
        section: 2,
      },
    ],
  },
  {
    sectionName: "Travel",
    sectionId: 5,
    sectionColor: "#e8e658",
    cards: [
      {
        id: new Date().getTime() + Math.random(),
        title: "Places to visit",
        content: "Vietnam, Thailand, Bali",
        avatar: travel1,
        dateTime: new Date(),
        section: 5,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "Things to pack for Intertional Vacation",
        content: "Passport, Aadhar Card",
        avatar: travel2,
        dateTime: new Date(),
        section: 5,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "Essentials for roadtrip",
        content: "Spare Tyre, Tools to change the tyre ",
        avatar: travel3,
        dateTime: new Date(),
        section: 5,
      },
    ],
  },
  {
    sectionName: "Cooking",
    sectionId: 3,
    sectionColor: "#3caaf0",
    cards: [
      {
        id: new Date().getTime() + Math.random(),
        title: "Biryani Recipie",
        content: "Watch it in YT",
        avatar: cooking1,
        dateTime: new Date(),
        section: 3,
      },
    ],
  },
  {
    sectionName: "Finance",
    sectionId: 6,
    sectionColor: "#e858c2",
    cards: [
      {
        id: new Date().getTime() + Math.random(),
        title: "Manage Cashflow",
        content: "Call CA and manage it!",
        avatar: finance1,
        dateTime: new Date(),
        section: 6,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "Apply for IPO",
        content: "Arkade Developers",
        avatar: finance2,
        dateTime: new Date(),
        section: 6,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "Savings",
        content: "2.5L",
        avatar: finance3,
        dateTime: new Date(),
        section: 6,
      },
    ],
  },
];
export { sectionLookups, AvatarLookups, initialColumnsData };
