import {React, useState} from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <div className="btn-group">
                <button onClick = {() => setCount(count + 1)}> +1 </button>
                <button onClick= {() => setCount(count + 10)}> +10</button>
                <button onClick={() => setCount(count + 100)}> +100</button>
                <button onClick={() => setCount(count + 1000)}> +1000</button>
            </div>
            <h1>{count}</h1>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );

};