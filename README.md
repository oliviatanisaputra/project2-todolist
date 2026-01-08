# Todo List Application

A feature-rich, React-based todo list application demonstrating advanced component architecture, state management, and CRUD operations with real-time search functionality.

## Overview

This project is a comprehensive todo list manager built with React that showcases practical implementation of state management, component communication, data filtering, and user interaction patterns. The application provides an intuitive interface for creating, reading, updating, and deleting tasks with additional search capabilities.

## Features

- **Create Tasks**: Add new todo items with a simple input interface
- **Mark as Complete**: Toggle completion status with interactive checkboxes
- **Delete Tasks**: Remove unwanted items from the list
- **Real-time Search**: Filter tasks by content with case-insensitive search
- **Date Tracking**: Automatic timestamp for each task creation
- **Dynamic Header**: Display current date in readable format
- **Keyboard Shortcuts**: Press Enter to quickly add new tasks
- **Input Validation**: Prevents adding empty tasks with auto-focus feedback
- **Pre-loaded Mock Data**: Includes sample tasks for demonstration

## Architecture

The application follows a well-structured component hierarchy with clear separation of concerns:

### Components

- **App.js**: Root component managing global state and orchestrating all CRUD operations
- **Header.js**: Displays current date with emoji decoration
- **TodoEditor.js**: Input form for creating new todo items with validation
- **TodoList.js**: Container component handling search functionality and rendering filtered items
- **TodoItem.js**: Individual todo item with checkbox, content, date, and delete button

### Data Flow

```
App (State Management)
 ├── Header (Display Only)
 ├── TodoEditor (Create)
 │    └── onCreate callback
 └── TodoList (Read & Filter)
      └── TodoItem (Update & Delete)
           ├── onUpdate callback
           └── onDelete callback
```

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **React Hooks**: 
  - `useState` for state management
  - `useRef` for DOM manipulation and ID generation
- **CSS**: Custom styling for component presentation
- **JavaScript ES6+**: Modern JavaScript features including arrow functions, destructuring, and spread operator

## Key Concepts Demonstrated

### 1. **CRUD Operations**
   - **Create**: Adding new todo items with unique IDs
   - **Read**: Displaying and filtering todo list
   - **Update**: Toggling completion status
   - **Delete**: Removing items from the list

### 2. **State Management**
   - Centralized state in parent component (App.js)
   - State lifting and props drilling
   - Immutable state updates using array methods

### 3. **Advanced React Patterns**
   - Using `useRef` for non-reactive values (ID generation)
   - Using `useRef` for DOM element references (input focus)
   - Controlled components with two-way data binding
   - Array methods for state manipulation (`map`, `filter`)

### 4. **User Experience Features**
   - Input validation with focus management
   - Keyboard event handling (Enter key submission)
   - Case-insensitive search functionality
   - Real-time filtering without page reload

### 5. **Data Handling**
   - Mock data initialization
   - Timestamp generation with `new Date().getTime()`
   - Date formatting with `toDateString()` and `toLocaleDateString()`

## Usage

### Adding a Task
1. Type your task in the input field under "새로운 To Do 작성 ✏️" (Write New Todo)
2. Click the "추가" (Add) button or press Enter
3. The task will appear in the list below

### Completing a Task
- Click the checkbox next to any task to mark it as complete/incomplete

### Searching Tasks
- Type keywords in the search bar under "To Do List 📋"
- The list will automatically filter to show matching tasks
- Search is case-insensitive

### Deleting a Task
- Click the "삭제" (Delete) button next to any task to remove it

## Implementation Highlights

### Smart ID Management
Uses `useRef` to maintain incrementing IDs without triggering re-renders:
```javascript
const idRef = useRef(3);
```

### Immutable State Updates
Demonstrates proper React state management:
- **Create**: Spreads new item at the beginning of array
- **Update**: Maps through array, toggling `isDone` for target item
- **Delete**: Filters out the target item

### Search Algorithm
Implements efficient case-insensitive filtering:
```javascript
todo.filter((it) => 
  it.content.toLowerCase().includes(search.toLowerCase())
)
```

## Learning Outcomes

This project was developed as part of Software Development Practice 2 (소프트웨어개발실습2) course and demonstrates:

- Mastery of React component composition
- Practical implementation of CRUD operations
- Advanced state management techniques
- Event handling and form validation
- Array manipulation and functional programming
- User-centric interface design
- Clean code practices with detailed Korean comments