import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";


const Counter = ({initialValue}) => {
    //기본값이 0에서 출발하고 1씩 증가하고, 1씩 감소하는 count 상태


    const [count, setCount] = useState(initialValue);

    const onIncrease = () => {
        setCount(count + 1);
    } 

    const onDecrease = () => {
        setCount(count - 1);
    }
return (
    <div>
        <h2>{count}</h2>
        <button onClick = {onIncrease}>+</button>
        <button onClick = {onDecrease}>-</button>
        <OddEvenResult count={count}/>
    </div>
);

}


export default Counter;