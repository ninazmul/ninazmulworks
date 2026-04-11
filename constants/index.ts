export const headerLinks = [
  {
    label: "About",
    route: "#about",
  },
  {
    label: "Skills",
    route: "#tech-stack",
  },
  {
    label: "Projects",
    route: "#projects",
  },
  {
    label: "Experience",
    route: "#experience",
  },
  {
    label: "Education",
    route: "#education",
  },
  {
    label: "Testimonials",
    route: "#testimonials",
  },
  {
    label: "Contact",
    route: "#contact",
  },
];

export const projectDefaultValues = {
  title: "",
  description: "",
  stack: "",
  image: "",
  url: "",
  category: "",
  author: "",
};

export const transactionDefaultValues = {
  date: new Date(),
  project: "",
  category: "",
  amount: "",
  due_amount: "",
  notes: "",
};

export const resourceDefaultValues = {
  title: "",
  description: "",
  stack: "",
  image: "",
  url: "",
  file: "",
  price: "",
  isFree: false,
  category: "",
  author: "",
};
