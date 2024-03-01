import React from 'react';
import { useState } from 'react';
function Redux() {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(prevCounter => prevCounter + 1)
      }
    return (
        <div>
            Value: {counter} <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Redux;


// core concepts in redux


