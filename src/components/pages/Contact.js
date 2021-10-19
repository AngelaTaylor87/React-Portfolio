
import { useState } from "react";
import ReactDOM from "react-dom";

export default function Contact() {
  
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div>
    <h1>Contact</h1>
    
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
    
      <label> Enter your message:
        <input 
          type="text" 
          name="message" 
          value={inputs.message || " "} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
    </div>
  );
}


