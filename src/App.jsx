import React, {useState} from "react";
  
const App= () =>
{
    const [name, setname] = useState("");
    const [fullName, setFullName] = useState();
    const [lastName, setlastName] = useState("");
    const [lastNameNew, setLastNameNew] = useState("");
    const inputEvent =(event) =>
    {
        console.log(event.target.value);
        setname(event.target.value);
    };
    const onSubmits =(event) =>
    {
        event.preventDefault();
        setFullName(name); 
        setLastNameNew(lastName); 
    }; 

    const inputEventTwo= (event) =>{
        setlastName(event.target.value);
    }
    return(
       <>
       <div className="box_border">
       <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
              <h1>Hello,😊{fullName} {lastNameNew}</h1>
              <input 
                 type="text" 
                 placeholder="Enter your Name" 
                 onChange={inputEvent} 
                value={name}/><br/>
                 <input 
                 type="text" 
                 placeholder="Enter your Last Name" 
                 onChange={inputEventTwo} 
                value={lastName}/><br/>
          <button type="submit" >Submit Me</button>
         </div>
       </form>
       </div>
       </div>
       </> 
    );
    
}
export default App;