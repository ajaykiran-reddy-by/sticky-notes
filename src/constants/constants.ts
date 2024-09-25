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

const sizeOptions = [
  {
    title: "Large",
    value: "L",
  },
  {
    title: "Medium",
    value: "M",
  },
  {
    title: "Small",
    value: "S",
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
        title: "",
        content:
          "Wake up at 5AM, Exercise/Stretch for 30 minutes , Shower and breakfast",
        avatar: personal1,
        dateTime: new Date(),
        section: 1,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "Reminder",
        content:
          "Grocery shopping, Pick up dry cleaning, Relax by watching cricket.",
        avatar: personal2,
        dateTime: new Date(),
        section: 1,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "Pending Tasks",
        content: "Clean the kitchen, Do laundry, Vacuum and tidy up",
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
        content:
          "Stretching (10-15 minutes) , Warm-up (jogging, jump rope, etc.), Hydration (drink 16-20 oz. of water)",
        avatar: sports1,
        dateTime: new Date(),
        section: 4,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "Tennis",
        content:
          "Sport-specific drills (e.g., dribbling, passing, shooting for basketball/soccer), Focus on ball handling",
        avatar: sports2,
        dateTime: new Date(),
        section: 4,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "Things to buy",
        content:
          "Strength workout (e.g., squats, lunges, push-ups, core exercises), Cardio session (e.g., sprints, cycling, rowing), Recovery (foam rolling, cool-down stretches)",
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
        content:
          "Arrive on time, Organize workspace, Review today’s agenda and prioritize tasks",
        avatar: office1,
        dateTime: new Date(),
        section: 2,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "UI tasks",
        content:
          "Check and respond to urgent emails, Follow up on pending messages, Send any necessary updates or reports",
        avatar: office2,
        dateTime: new Date(),
        section: 2,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "Leave Req",
        content:
          "Organize files and documents, Update project management tools (e.g., Trello, Asana) , File or digitize important paperwork",
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
        content:
          "Book flights, accommodations, and transportation, Apply for visa (if required),Check passport validity (at least 6 months left),Purchase travel insurance,Arrange airport transfer or parking",
        avatar: travel1,
        dateTime: new Date(),
        section: 5,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "Things to pack for Intertional Vacation",
        content:
          "Research destinations and create a daily itinerary, Book tours or tickets for attractions (museums, activities), Make restaurant reservations (if needed)",
        avatar: travel2,
        dateTime: new Date(),
        section: 5,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "Essentials for roadtrip",
        content:
          "Pack essentials (clothes, shoes, toiletries), Travel documents (passport, visa, tickets, itinerary, ID), Medications and first aid kit, Weather-appropriate gear (umbrella, sunglasses, sunscreen)",
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
        content:
          "Decide on meals for the week/day,Check for dietary preferences or restrictions,Plan portion sizes and meal prep for leftovers",
        title: "Watch it in YT",
        avatar: cooking1,
        dateTime: new Date(),
        section: 3,
      },
      {
        id: new Date().getTime() + Math.random(),
        content:
          "Check pantry/fridge for ingredients you already have, Make a grocery list based on recipes, Include kitchen staples (e.g., spices, oils, condiments).",
        title: "Watch it in YT",
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
        content:
          "Review last month’s expenses, Create a monthly budget (track income and expenses), Allocate funds to different categories (rent, utilities, groceries, savings, etc.),Set spending limits for discretionary items (entertainment, dining out),Use a budgeting tool or app to track expenses in real-time",
        avatar: finance1,
        dateTime: new Date(),
        section: 6,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "Apply for IPO",
        content:
          "List all monthly bills (utilities, rent, subscriptions, etc.), Set up automatic payments for recurring billsm,Ensure credit card balances are paid on time",
        avatar: finance2,
        dateTime: new Date(),
        section: 6,
      },
      {
        id: new Date().getTime() + Math.random(),
        title: "Savings",
        content:
          "Set up automatic transfers to savings accounts, Set savings goals (e.g., emergency fund, vacation, new purchase),Track progress towards each goal",
        avatar: finance3,
        dateTime: new Date(),
        section: 6,
      },
    ],
  },
];
export { sectionLookups, AvatarLookups, initialColumnsData, sizeOptions };
