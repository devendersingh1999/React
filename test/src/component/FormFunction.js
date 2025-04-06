import React, { useState, useEffect } from "react";

function EmployeeValidationForm() {
 
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [employeeId, setEmployeeId] = useState("")
  const [joiningDate, setJoiningDate] = useState("")
 
  const nameError = name.length < 4 || !(/^[A-Za-z\s]+$/.test(name));
  const emailError = !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  const employeeIdError = isNaN(employeeId) || employeeId.length !== 6;
  const joiningDateError = joiningDate !== '' ? new Date() < new Date(joiningDate) : true;

  const submitEnabled = nameError || emailError || employeeIdError || joiningDateError


  const handle=(event) =>{
    event.preventDefault();
    alert("Form is Submitted");
    
  }

  return (
    <form onSubmit={handle}>
      <div className="layout-column align-items-center mt-20">
        <div className="layout-column align-items-start mb-10 w-50" data-testid="input-name">
          <input
            className="w-100"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            data-testid="input-name-test"
          />
          {nameError && 
          <p className="error mt-2">
            Name must be at least 4 characters long and only contain letters and spaces
          </p> 
        }
        </div>
        <div className="layout-column align-items-start mb-10 w-50" data-testid="input-email">
          <input
            className="w-100"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          {emailError && 
          <p className="error mt-2">
            Email must be a valid email address
          </p> 
        } 
        </div>
        <div className="layout-column align-items-start mb-10 w-50" data-testid="input-employee-id">
          <input
            className="w-100"
            type="text"
            name="employeeId"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            placeholder="Employee ID"
          />
          {employeeIdError && 
          <p className="error mt-2">
            Employee ID must be exactly 6 digits
          </p> 
        }    

        </div>
        <div className="layout-column align-items-start mb-10 w-50" data-testid="input-joining-date">
          <input
            className="w-100"
            type="date"
            name="joiningDate"
            value={joiningDate}
            onChange={(e) => setJoiningDate(e.target.value)}
            placeholder="Joining Date"
          />
           {joiningDateError &&  <p className="error mt-2"> Joining Date cannot be in the future </p> }    
        
        </div>

        <button
          type="submit"
          data-testid="submit-btn"
          disabled={submitEnabled}// Button is disabled if errors or incomplete fields exist
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default EmployeeValidationForm;


// import React, {useState, useEffect} from "react";

// function EmployeeValidationForm() {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [employeeId, setEmployeeId] = useState("")
//   const [joiningDate, setJoiningDate] = useState("")

//   const nameError = name.length < 4 || !(/^[A-Za-z\s]+$/.test(name));
//   const emailError = !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
//   const employeeIdError = isNaN(employeeId) || employeeId.length !== 6;
//   const joiningDateError = joiningDate !== '' ? new Date() < new Date(joiningDate) : true;

//   const submitEnabled = nameError || emailError || employeeIdError || joiningDateError

//   return (
//     <div className="layout-column align-items-center mt-20 ">
//       <div className="layout-column align-items-start mb-10 w-50" data-testid="input-name">
//         <input
//           className="w-100"
//           type="text"
//           name="name"
//           value={name}
//           placeholder="Name"
//           data-testid="input-name-test"
//           onChange={(val) => setName(val.target.value)}
//         />
//         {nameError && 
//           <p className="error mt-2">
//             Name must be at least 4 characters long and only contain letters and spaces
//           </p> 
//         }
//       </div>
//       <div className="layout-column align-items-start mb-10 w-50" data-testid="input-email">
//         <input
//           className="w-100"
//           type="text"
//           name="email"
//           value={email}
//           placeholder="Email"
//           onChange={(val) => setEmail(val.target.value)}
//         />
//         {emailError && 
//           <p className="error mt-2">
//             Email must be a valid email address
//           </p> 
//         }        
//       </div>
//       <div className="layout-column align-items-start mb-10 w-50" data-testid="input-employee-id">
//         <input
//           className="w-100"
//           type="text"
//           name="employeeId"
//           value={employeeId}
//           placeholder="Employee ID"
//           onChange={(val) => setEmployeeId(val.target.value)}
//         />
//         {employeeIdError && 
//           <p className="error mt-2">
//             Employee ID must be exactly 6 digits
//           </p> 
//         }        
//       </div>
//       <div className="layout-column align-items-start mb-10 w-50" data-testid="input-joining-date">
//         <input
//           className="w-100"
//           type="date"
//           name="joiningDate"
//           value={joiningDate}
//           placeholder="Joining Date"
//           onChange={(val) => setJoiningDate(val.target.value)}
//         />
//         {joiningDateError && 
//           <p className="error mt-2">
//             Joining Date cannot be in the future
//           </p> 
//         }            
//       </div>
//       <button data-testid="submit-btn" disabled={submitEnabled} type="submit">
//         Submit
//       </button>
//     </div>
//   );
// }

// export default EmployeeValidationForm;
