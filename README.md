#Task Dashboard

A responsive task management dashboard built with React, TypeScript, and Vite.

This project was created to practice building a dashboard application from the ground up, focusing on component architecture, state management, derived data, TypeScript, form handling, and responsive UI design.

---

## 🌐 Live Demo

```
https://
```

---

## ✨ Features

* Add new tasks
* Set task status
* Set task priority
* Change task status
* Delete tasks
* Filter tasks by status
* Display total task statistics
* Calculate task distribution by status
* Calculate completion rate
* Form validation for empty task titles
* Responsive dashboard layout
* Responsive sidebar with mobile toggle

---

## 📖 What I Learned

This project was built to strengthen my understanding of React application architecture, state management, and component optimization.

### React Fundamentals

React component architecture
TypeScript fundamentals
Typed component props
Union types
Local state management
Derived data
Controlled form inputs
Form validation
Event handling
Array methods such as map() and filter()
Conditional rendering
CSS Flexbox
CSS Grid
Responsive design
Reusable components
Basic UI/UX decisions

---

## 🛠️ Tech Stack

React
TypeScript
Vite
CSS
React Hooks
---

## Dashboard Statistics

The dashboard calculates statistics dynamically from the current task data.

It displays:

Total Tasks
Total Todo
Total In Progress
Total Completed
Completion Rate

Percentage values are calculated from the task data and formatted for a cleaner UI presentation.
---

## 📁 Project Structure

The application is divided into several main components:
```
App
├── Header
├── Sidebar
├── Overview
│   └── StatCard
└── TaskSection
    ├── TaskForm
    ├── FilterBar
    ├── TaskList
    │   └── TaskItem
```
Header

Contains the dashboard title, subtitle, and the mobile sidebar toggle.

Sidebar

Provides simple dashboard navigation and becomes collapsible on smaller screens.

Overview

Displays derived task statistics through reusable StatCard components.

TaskSection

Contains the main task management functionality:

Task creation
Task filtering
Task list
Status changes
Task deletion
State Management

The project uses React local state to manage UI and application data.

Examples include:

Task collection
Form data
Active task filter
Sidebar visibility
Form validation feedback

Derived statistics are calculated from the task collection rather than being stored as separate state.

TypeScript

TypeScript is used to provide type safety throughout the application.

Examples include:

Task data types
Task status types
Task priority types
Component props
Event types
State types

The project also uses union types for values with a limited set of possible options, such as task status and priority.

Responsive Design

The dashboard is designed to adapt to different screen sizes.

Desktop

The sidebar remains visible while the main content occupies the remaining available space.

Mobile

The sidebar becomes collapsible through a toggle button, allowing the main content to use the available screen width more efficiently.

The task form, overview cards, and task items also adapt to smaller screen sizes.

---

## 🚀 Getting Started

Installation

Clone the repository and install the dependencies:
```
git clone <>
```

```
npm install

```
Run Development Server
```
npm run dev
```

Open the local development URL shown in the terminal.

Build

To create a production build:
```
npm run build
```
Clone the repository

---

## Project Status

Completed and tested.

The application has been tested across its main functionality and responsive layouts.

## License

This project was created for learning and portfolio purposes.


