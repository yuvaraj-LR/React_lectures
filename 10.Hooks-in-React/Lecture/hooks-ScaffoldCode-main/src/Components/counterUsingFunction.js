import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCounter] = useState(1);

    const increment = () => {
        setCounter(count + 1);
    }

    const decrement = () => {
        if(count > 0) {
            setCounter(count - 1);
        }
    }

    return (
        <>
            <h1>Counter Function</h1>
            <h1>Count: {count}</h1>

            <h1>
                <span onClick={increment}>+</span>
                &nbsp; &nbsp;
                <span onClick={decrement}>-</span>
            </h1>
        </>
    )

}

