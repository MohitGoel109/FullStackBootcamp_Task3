# FullStackBootcamp_Task3

Welcome to the third task of the Full Stack Bootcamp. This repository contains practical implementations of React Routing and the `useEffect` hook.

## 🚀 Tasks Overview

This project focuses on two core concepts in React:
1. **React Routing:** Creating a multi-page feel by implementing a Navigation Bar.
2. **React Hooks:** Understanding and implementing the `useEffect` hook with three distinct architectural side-effects.

---

## 🛠️ Features & Implementations

### 1. Navbar with React Router
Implemented dynamic routing using `react-router-dom` to navigate seamlessly between different views without reloading the page.
* **Component:** `Navbar`
* Features a clean layout with active link states.

### 2. `useEffect` Hook Examples
To explore the lifecycle, dependencies, and cleanups in functional components, three distinct examples were built into separate components:

* **Component 1: Real-time Window Resize Tracker (`WindowResizeComponent`)**
  * Demonstrates using `useEffect` with a global event listener.
  * Includes a **cleanup function** to remove the event listener when the component unmounts, preventing memory leaks.
  
* **Component 2: Auto-Incrementing Timer (`TimerComponent`)**
  * Demonstrates handling asynchronous native APIs (`setInterval`).
  * Features a crucial cleanup routine (`clearInterval`) to stop the timer when switching pages or unmounting.

* **Component 3: State-Dependent Counter (`CounterComponent`)**
  * Demonstrates how `useEffect` responds to a specific dependency array trigger.
  * Updates or runs specific logic exclusively when the tracking counter state changes.

---

## 📦 Tech Stack

* **Frontend:** React.js (Functional Components)
* **Routing:** React Router DOM
* **Styling:** CSS3 / Tailwind CSS
