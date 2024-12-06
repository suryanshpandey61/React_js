import { useState } from "react";

const State = () => {

    //use state ik hook hai 
    let [state,setState] = useState("Hello");
    console.log(state);
    function btnClick(){
        console.log("Btn Clicked");
        setState("Namastey Bhai Log");
    }

    return(
        <div>
            <h1>This is State in FBC {state}</h1>
            <button onClick={btnClick}>Click Btn</button>
        </div>
    )
}
export default State;
