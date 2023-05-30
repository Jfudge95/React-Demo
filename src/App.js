import { useState } from "react"; //state = a value that when it changes the DOM reflects that change. Stateful variables must have the useState hook here.

function App() {
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

export default App;

// line 4 There are 2 return values. The first value "counter" is our stateful variable. Our second "setCounter" is our variable. Inside the function we give it the initial value of zero useState(0)
// NEVER modify a stateful variable directly. the variable "setCounter" will be how we modify our stateful value "counter"
// Too create a React App go to GitBash and type "npx create-react-app ProjectName" so an example would be "npx create-react-app demo"
