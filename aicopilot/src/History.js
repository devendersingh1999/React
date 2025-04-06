import React from "react";

const History = ({ todo, deleteTask, clearAll }) => {
  console.log("Rendering History");

  return (
   
    <>
    {todo.length > 0 ? (
      <>
        {todo.map((task, index) => (
          <p
            key={index} // Add the key prop here
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </p>
        ))}
        <button onClick={clearAll}>Clear All</button>
      </>
    ) : (
      <p>No history available.</p>
    )}
  </>
  

  )}


export default React.memo(History);
// style={{
//     marginTop: "10px",
//     backgroundColor: "darkred",
//     color: "white",
//     border: "none",
//     padding: "10px 15px",
//     cursor: "pointer",
//   }}