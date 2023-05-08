import React, { useState} from "react"
function ButtonGame(){
    const[count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count -1);
    }
    function handleChange(event){
        if (event.target.name === 'firstButton'){
            setCount(document.getElementById("fButton").valueAsNumber + count)
        }
        else if (event.target.name === 'secondButton'){
            setCount(count - document.getElementById("sButton").valueAsNumber)
        }
    }
     return(
            <React.Fragment>
            <div>Count: {count} </div>
               <button onClick={increment}>Submit</button> <br /> <br />
               <button onClick={decrement}>Submit</button> <br /><br />

            <label htmlFor="fButton">
           Increment by value:  <input type="number" name="firstButton" id="fButton" placeholder="enter number"></input>
           <button name="firstButton" onClick={handleChange}>Submit</button>
            </label><br /> <br />

            <label htmlFor="sButton">
            Decrement by value:   <input type="number" name="secondButton" id="sButton" placeholder="enter number"
               /> </label>
               <label htmlFor="sButton">
               <button name="secondButton" onClick={handleChange}>Submit</button>
            </label><br /> <br />

            </React.Fragment>
           
        )
    }

export default ButtonGame;