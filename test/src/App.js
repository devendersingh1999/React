 import './App.css';

import Mutable from './hooks/Mutable';


function App() {
  return (
 <>
<Mutable/>
 </>
    
  )
}

export default App;


//props in hook

// function App() {
//   return (
//  <>
// <Props name="alex"/>
//  </>
    
//   )
// }

// export default App;

// StopWatch

// function App() {
//   return (
//  <>
//  <Obj/>
//  <StopWatch/>
//  </>
    
//   )
// }

// export default App;


// ChangeColor

// function App() {
//   return (
//     <div>
  
//   <ColorChange  />
//      <Counter/>
//     </div>
//   )
// }

// export default App;

// Test

// function App() {
//   return (
//     <div>
  
//   <Test  />
     
//     </div>
//   )
// }

// export default App;

//from

//  function App() {
//    return (
//      <div>
//        {<Form/>}
      
//      </div>
//    )
//  }
 
//  export default App;
 

//Timer , toggal mount

// class App extends Component {
//     constructor() {
//       super();
//       this.state = { status: true }
//     }

//     toggleMounting = () => {
//       this.setState({ status: !this.state.status })
//     }

//     render() {
//       return (
//         <>
//           <button onClick={this.toggleMounting}>Toggle Mounting</button>
//           <br />
//           {this.state.status && <Counter />}
//           <br/>
//           {/* {this.state.status ? <Counter/> : <ToggalButton/>}  */}

//           <Timer />
//         </>
//       )
//     }
// }

// export default App;

// function App () {
//   return (
//     <>
//     <CompLifeCycle/>
//       <ToggalButton/>
//    </>
//   )
// }

// export default App;

//Increment and drecrement

// function App () {
//   return (
//     <>
//       <Counter/>
//     </>
//   )
// }

// export default App;


//State Changing Name
// function App () {



//   return (
//     <>
//       <StateExample/>
//     </>
//   )
// }

// export default App

//Printing Number
// function App () {

//   const marks=[1,2,3,4,5];

//   return (
//     <>
//       <Number number={marks}/>
//     </>
//   )
// }

// export default App



// Events

// function App(){


//   return(
//     <>
//     <Events isLogged ={true}
//      logout = {() => alert('logging out')} 
//      login  = {() => alert('logging in')}/>
    
//     </>
//   );
// }

// export default App;

// or=============================================

// function App(){

// const logout= ()=>{
//   console.log("Logout");
  
// }
// const login = () => {
//   console.log("login");
  
// }
// return(
//   <Events isLogged ={true}
//      logout = {login} 
//      login  = {logout}/>
// )

// export default App;



//=================Switch Case==============================================================

// function App(){

//     return(
//       <>
//      <SwitchCase isLogged={true} isAdmin={false}/>
      
//       </>
//     );
//   }
  
//   export default App;



//===========================Condition===================================================================

// function App(){
//   const unreadMessage=90;

//   return(
//     <>
//     <Condition msg={unreadMessage}/>
    
//     </>
//   );
// }

// export default App;


//====================BooleanValues====================================================================

// function App(){
//   const car={
//     brand:"BMW",
//     color:"Blue",
//     price:2500

//   }
//   return(
//     <>
//     <BooleanValues prop={car} status={true}/>
    
//     </>
//   );
// }

// export default App;

//=================props============================================================================

// function App() {

//   const name="alex";
//   const age=22;
//   return (
  
//     <Second username={name} age={age}/>

//   );
// }

// export default App;


//==================Function component=====================================================================

// function App() {

//   return (
    
//     <FunctionComponent/>

//   );
// }
 
// export default App;
