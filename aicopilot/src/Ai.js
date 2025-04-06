import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/Ai.css'


const Ai = ({ addTask }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const res = async (event) => {
    event.preventDefault();

    // Add the input to the todo list via the callback
    addTask(input);

    // Clear the input field after submission
    setInput("");

    const url = 'https://infinite-gpt.p.rapidapi.com/infinite-gpt';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '286ba44fd8msh74a74d5a4dfd482p1a502ejsnf2a8478bca4b',
            'x-rapidapi-host': 'infinite-gpt.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
            query:input ,
            sysMsg: ""
        })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      // Extract the message from the response
      if (result?.msg) {
        setOutput(result.msg);
      }
       else {
        setOutput("No output received from the API.");
      }

      console.log(result);
    } catch (error) {
      console.error(error);
      setOutput("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contain">
      <form onSubmit={res} className="formContainer">
        <div className="outputField">
          <div>
            {/* Conditionally render the <h3> tag */}
            {!output && <label><h3>What can I help with?</h3></label>}

            {/* Display the output */}
            {output && <p id="outputField">{output}</p>}
          </div>
        </div>

        <div className="fromInput">
          <input
            type="text"
            id="inputField"
            placeholder="Message ChatGpt"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Ai;

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Ai = () => {
//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState("");

//   const res = async (event) => {
//     event.preventDefault();

//     const url = "https://copilot5.p.rapidapi.com/copilot";
//     const options = {
//       method: "POST",
//       headers: {
//         "x-rapidapi-key": "d89d4f76a9msh275af6a62a3a1e2p19bfbejsn41346a7a8b14",
//         "x-rapidapi-host": "copilot5.p.rapidapi.com",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         message: input,
//         conversation_id: null,
//         tone: "BALANCED",
//         markdown: false,
//         photo_url: null,
//       }),
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();

//       // Extract the message from the response
//       if (result && result.data && result.data.message) {
//         setOutput(result.data.message); // Correct field
//       } else {
//         setOutput("No output received from the API.");
//       }

//       console.log(result);
//     } catch (error) {
//       console.error(error);
//       setOutput("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <form onSubmit={res} className="p-4 border rounded bg-light">
//         <div className="mb-3">
//           <label htmlFor="inputField" className="form-label">
//             Write Here
//           </label>
//           <input
//             type="text"
//             id="inputField"
//             className="form-control"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="outputField" className="form-label">
//             Output Here
//           </label>
//           <div id="outputField" className="form-control bg-light">
//             {output}
//           </div>
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Ai;
