import { useState } from "react"; //state = a value that when it changes the DOM reflects that change. Stateful variables must have the useState hook here.

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
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