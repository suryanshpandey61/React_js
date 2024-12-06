import { useState } from "react"

const Counter = () => {

    const [count,setCount] = useState(0);

    function incrementHandler (){
        setCount(count + 1);
    }

    function decrementHandler(){
        if(count>=1){
         setCount(count-1);
        }
    }

    function resetFunction(){
        setCount(0);
    }

    return (
        <div>

            <div>
                {count}
            </div>

            <button onClick={incrementHandler}>
                +
            </button>
            <button onClick={decrementHandler}>
                -
            </button>
            <button onClick={resetFunction}>
                Reset 
            </button>

        </div>
    )
}
export default Counter;