import Counter from "./Components/Counter"; //Default exports do not need to be destructured aka no { file name }
import Greeting from "./Components/Greeting";

function App() {
  return (
    <div>
      <Counter />
      <Greeting name="Jordan" />
    </div>
  );
}

export default App; // We use "Default" when we are only exporting 1 thing. Therefore, by default, we are exporting App. We could have more code that's outside of App but we just want to export App.

// line 4 There are 2 return values. The first value "counter" is our stateful variable. Our second "setCounter" is our variable. Inside the function we give it the initial value of zero useState(0)
// NEVER modify a stateful variable directly. the variable "setCounter" will be how we modify our stateful value "counter"
// NEVER change the DOM directly. The Virtual DOM will do it for you.
// The virtual DOM will keep the APP and the DOM insync with eachother. So if something in the APP changes than the DOM reflects that change and vise versa.
// Example of the Virtual DOM in action is us clicking the "Increment" button in Counter. We click the button, the Event is Delivered from the DOM to the Virtual Dom. The Virtual Dom send the Event Delivery to the APP/ The APP, to reflect that change, sends the build to the Virtual DOM aka increases the count by 1. This build/change is communicated, by the virtual DOM, from the APP to the DOM to reflect the Count to show that it has increased by 1. Long Story Short: You click "Increment" and the Count goes up 1
// Too create a React App go to GitBash and type "npx create-react-app ProjectName" so an example would be "npx create-react-app demo"
