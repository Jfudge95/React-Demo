import { useState, useEffect } from "react"; //state = a value that when it changes the DOM reflects that change.

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("counter:", counter);
  }, [counter]);

  const increment = (e) => {
    setCounter((currentVal) => currentVal + 1); //Because multiple things could be changing our Counter. We use currentVal to always show the current value of the counter
  };

  const decrement = () => {
    if (counter === 0) return;
    setCounter((currentVal) => currentVal - 1);
  };
  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;

// The first value "counter" is our stateful variable. Our second "setCounter" is our variable. Inside the function we give it the initial value of zero useState(0)
// In our useEffect, We will see in our console.log that everyime ourr array with the stateful variable changes (aka [counter]) we will see counter: # each time the stateful cariable changes.
