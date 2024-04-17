import React from 'react';
import './App.css';
import TaskForm from "./components/taskForm";
import TaskList from "./components/taskList";

function App() {

  return (
    <div className="App">
      <h1>Hello word!</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
