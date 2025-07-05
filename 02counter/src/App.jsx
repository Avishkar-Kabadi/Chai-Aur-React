// import { useState } from "react";
// import "./App.css";

import { useState } from "react";
import "./App.css";

// function App() {
//   const [counter, setCounter] = useState(0);

//   const addValue = () => {
//     if (counter == 20) {
//       alert("Counter has a limit upto 20 only!");
//     } else {
//       setCounter(counter + 1);
//     }
//   };
//   const removeValue = () => {
//     if (counter == 0) {
//       alert("Counter value cannot be negative!");
//     } else {
//       setCounter(counter - 1);
//     }
//   };
//   return (
//     <>
//       <h1>Chai aur react</h1>
//       <h2>Counter Value: {counter}</h2>
//       <button onClick={addValue}>Add Value</button> <br />
//       <button onClick={removeValue}>Remove Value</button>
//     </>
//   );
// }

// export default App;

export default function App() {
  const [counter, setCounter] = useState(0);

  // Normal name function
  function increaseCount() {
    if (counter == 20) {
      alert("Maximum limit reached");
    } else {
      setCounter(counter + 1);
    }
  }

  // Function expression using unnamed function
  const removeValue = function decreaseCount() {
    if (counter == 0) {
      alert("Minimum Value reached");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Counter</h1>
      <br />
      <h2>Counter Value: {counter}</h2>

      {/* calling the function using expression function */}
      <button onClick={removeValue}>-</button>

      {/* calling the function directly using Callback function */}
      <button
        onClick={() => {
          increaseCount();
        }}
      >
        +
      </button>
    </>
  );
}
