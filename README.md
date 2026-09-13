# 🧱 Dev Stack Builder

Dev Stack Builder is a responsive React web application that helps developers explore different technologies and build their own technology stack. Users can browse technologies, view their details, and add or remove technologies from their personal stack.

## 🚀 Live Website

(https://assignment-5-dev-stack-builder.vercel.app/#technologies)

## 📂 GitHub Repository

(https://github.com/anwarsadek/assignment-5-dev-stack-builder/blob/main/README.md)

## 🛠️ Technologies Used

* React.js
* JavaScript (ES6+)
* Tailwind CSS
* CSS
* React-Toastify
* JSON
* Vite

## ✨ Features

### 1. Technology Explorer

Browse different development technologies with their icons, categories, descriptions, difficulty levels, badges, and ratings.

### 2. Build Your Stack

Users can add technologies to their personal stack. Added technologies cannot be added twice and can be removed individually or all at once.

### 3. Responsive Design

The website is fully responsive and works across desktop, tablet, and mobile devices with a responsive navigation menu.

## 📦 Project Structure

```text
src/
├── components/
│   ├── Brand/
│   ├── Hero/
│   ├── Navbar/
│   ├── TechnologyCard/
│   └── StackPanel/
├── data/
│   └── technologies.json
├── App.jsx
├── styles.css
└── main.jsx
```

## 🔔 Notifications

React-Toastify is used to provide feedback when users:

* Add a technology
* Try to add a duplicate technology
* Remove a technology
* Remove all technologies

## ⏳ Loading State

The technology information is loaded from a local JSON file. A loading state is displayed while the data is being fetched.

---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to read and allows us to describe the UI directly inside our JavaScript code.

## 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time and cause the UI to update.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` allows a component to store and update data. In this project, it is used for things such as the selected technology stack, loading state, and mobile menu state.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. I used it to fetch the technology data from the JSON file when the application loads.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React efficiently determine which items have changed, been added, or been removed.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it in the Your Stack section. When no technology is selected, the empty-stack message is displayed. When technologies are selected, the stack items are displayed instead.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through props. A child can send information back to the parent by calling a function that the parent passes to it as a prop.

---

## 📌 Assignment Highlights

* Shared orange → pink → violet gradient theme
* Responsive sticky navigation
* Technology cards with dynamic JSON data
* Interactive personal technology stack
* Add, remove, and remove-all functionality
* Duplicate technology prevention
* Toast notifications
* Loading state
* Responsive mobile layout

## 👨‍💻 Author

**Anwar Sadek**

Built with React.js and modern frontend technologies.
