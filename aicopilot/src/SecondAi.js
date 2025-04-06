import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/Ai.css'


const SecondAi = ({ addTask }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const res = async (event) => {
    event.preventDefault();

    // Add the input to the todo list via the callback
    addTask(input);

    // Clear the input field after submission
    setInput("");


    const url = 'https://copilot5.p.rapidapi.com/copilot';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '286ba44fd8msh74a74d5a4dfd482p1a502ejsnf2a8478bca4b',
		'x-rapidapi-host': 'copilot5.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		message: input,
		conversation_id: null,
		tone: 'BALANCED',
		markdown: false,
		photo_url: null
	})
};

try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.data.message);
    if (result?.data?.message) {
        setOutput(result.data.message);
      } else {
        setOutput("Unexpected API response. Please try again.");
      }
    } catch (error) {
      console.error("API Error:", error);
      setOutput("An error occurred. Please try again later.");
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

export default SecondAi;


// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);

//       // Extract the message from the response
//       if (result && result.data && result.message) {
//         setOutput(result.message);
//       } else {
//         setOutput("No output received from the API.");
//       }

//       console.log(result);
//     } catch (error) {
//       console.error(error);
//       setOutput("An error occurred. Please try again.");
//     }
//   };