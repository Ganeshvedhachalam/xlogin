import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const[username ,setUsername]=useState("")
  // const[password ,setpassword]=useState("")
  const[input ,setInput]=useState({})
  

   const handlechange=(e)=>{
    // const name=e.target.name
    // const value=e.target.value
    setInput( (prev)=> { return {...prev, [e.target.name]:e.target.value} }
    
    )

   }
  const handlesubmit=(e)=>{
     e.preventDefault()
      // setInput({names:e.,
      //   pass:e.target.name
      // })
      if(input.Username===Validusername && input.Password===Validpassword){
        alert("Welcome, user!")
      }else{
        alert("Invalid username or password")
      }
      alert(input)
    

  }
  console.log(input)
  const Validusername="User"
  const Validpassword="Password"

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login Page</h1>
        <form onSubmit={handlesubmit}>
          <label>Username:<input  name="Username"  onChange={handlechange} 
       placeholder='enter your username' required/></label>
          <br></br>
          <label>Password:<input  name="Password" onChange={handlechange} 
           placeholder='enter your password' required/></label>
          <br></br>
          <button onClick={handlesubmit}> Submit</button>
        </form>
        
      </header>
    </div>
  );
}

export default App;