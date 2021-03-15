
import { useState } from 'react';
import './App.css';
import Input from './Components/Input'

function App() {
  const color='#0052A2'
  const[bg ,setBg]=useState(color)
  const[name, setName]=useState(" click Me")

  const Clickme=(e)=>{

    
    e.target.id === "one" ?  setBg('red') : e.target.id === "two" ? setBg('green') :  e.target.id === "three" ? setBg('yellow') : setBg("pink")
    
    
    

    setName('hello you clicked !!:wolf');

  }

  const Double=()=>{
setBg(color);
setName("you clicked two times")

  }
  

  const Clicked=(e)=>{
   e.preventDefault();

  }

  const outer=()=>{
    console.log("outer")
  }

  const inner=(e)=>{
    console.log("inner")
    e.stopPropagation();

  }
  return (
    <div className="App">
     

      <div className="full-body" style={{ backgroundColor: bg}}> 

        <div className="center">
          
        <ul>

         <li><button onClick={Clickme} onDoubleClick={Double} id="one" className="firststbtn">{name}</button></li>  
         <li> <button onClick={Clickme} className="secondbtn" id="two">Second</button></li> 
          <li>  <button onClick={Clickme}  className="thirdbtn" id="three">third</button></li>
       </ul>           
            
        </div>

             <form>
            <Input type="text" placeholder="Enter Your email"/>
            <Input type="password" placeholder="Enter Your password"/>
            <button  type="submit" onClick={Clicked} className="submit1">Submit</button>
            </form>
      </div>   

      <div  onClick={outer}>
      <div onClick={inner}>
        <h1>hi</h1>
      </div>
      </div>


    </div>
  );
}

export default App;
