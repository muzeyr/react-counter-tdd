import { useState } from "react";

const Counter = ({ initialVal }) => {
    const [count, setCount] = useState(initialVal ?? 0);
    const remove = () => {
        setCount((prevCount) => {
            const result = prevCount - 1;
            if (result < 0) {
                return 0;
            }
            return result;
        });

    }
    const add = () => {
        setCount(count + 1);
    }
    const reset = () => {
        setCount(0);
    }
    return (<div>
        {count}
        <button onClick={remove}>Remove</button>
        <button onClick={add}>Add</button>
        <button onClick={reset}>Reset</button>
    </div>)
}
export default Counter;