import React, { useState, useCallback } from "react";
import './css/App.css';
import History from "./History";
import SecondAi from "./SecondAi";
import Ai from "./Ai";


function App() {
                                            
  const [todo, setTodo] = useState([]);// Manage the todo array in the App component
 

  // Callback to add tasks to the todo array
  const addTask = useCallback((input) => {
    setTodo((prev) => [...prev, input]);
  }, []);

  // Callback to delete a specific task
  const deleteTask = useCallback((indexToDelete) => {
    setTodo((prev) => prev.filter((_, index) => index !== indexToDelete));
  }, []);

  // Callback to clear all tasks
  const clearAll = useCallback(() => {
    setTodo([]);
  }, []);

  return (
    <div className="cont">
      <div className="left">
        <h3>History</h3>
       
        <History todo={todo} deleteTask={deleteTask} clearAll={clearAll} /> {/* Pass the todo array, deleteTask, and clearAll to History */}
      </div>

      <div className="right">
     
        <Ai addTask={addTask} />    {/* Pass the addTask function to Ai */}
        {/* <Ai addTask={addTask} />    Pass the addTask function to Ai */}

      </div>
    </div>
  );
}

export default App;
