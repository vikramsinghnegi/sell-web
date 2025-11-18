// src/data/kitData.js

import { FaJs, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";

export const kitFeatures = [
  {
    id: 1,
    title: "JavaScript Notes",
    icon: FaJs,
    syllabus: [
      "ES6+ Features: let, const, arrow functions",
      "DOM Manipulation & Event Handling",
      "Objects, Arrays, Map, Set, JSON",
      "Functions, Scope, Hoisting",
      "Interview Questions with Solutions",
      "Tips & Tricks for Coding Interviews",
    ],
  },
  {
    id: 2,
    title: "React Notes",
    icon: FaReact,
    syllabus: [
      "Components, Props, and State",
      "Hooks: useState, useEffect, useRef",
      "React Router v6 Basics",
      "Context API & Redux Toolkit Overview",
      "Common Interview Questions",
    ],
  },
  {
    id: 3,
    title: "HTML Notes",
    icon: FaHtml5,
    syllabus: [
      "HTML5 Semantic Tags",
      "Forms & Validation",
      "Tables, Lists, and Media Tags",
      "Best Practices & SEO Tips",
    ],
  },
  {
    id: 4,
    title: "CSS Notes",
    icon: FaCss3Alt,
    syllabus: [
      "Flexbox & Grid Layouts",
      "Animations & Transitions",
      "Responsive Design Techniques",
      "CSS Variables & Best Practices",
    ],
    highlight: true,
  },
];

export const kitHighlights = [
  { text: "Instant Access", color: "yellow" },
  { text: "97% Success Rate", color: "green" },
  { text: "Lifetime Support", color: "blue" },
];
