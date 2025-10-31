import { useState } from 'react'
import React from 'react'

function StateHandling() {
    const [counter, setCounter] = useState(20);
    function IncreaseCounterValue() {
        setCounter(counter + 2);
    }
    function DecreaseCounterValue() {
        setCounter(counter -4);
    }
  
  
    return (
      <div>
            <h2>Counter value={counter}</h2>
            <button onClick={IncreaseCounterValue}>increment</button>
            <button onClick={DecreaseCounterValue}>decrement</button>
      </div>
    );
}

export default StateHandling