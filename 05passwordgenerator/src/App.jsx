// import "./App.css";

import { useCallback, useEffect, useState, useRef } from "react";

// function App() {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

// const passwordGenerator = useCallback(() => {
//   let pass = "";
//   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//   if (numberAllowed) str += "1234567890";
//   if (charAllowed) str += "!@#$%^&*~";

//   for (let i = 1; i <= length; i++) {
//     let charIndex = Math.floor(Math.random() * str.length);
//     pass += str.charAt(charIndex);
//   }

//   setPassword(pass);
// }, [length, numberAllowed, charAllowed, setPassword]);

//   useEffect(() => {
//     passwordGenerator();
//   }, [length, numberAllowed, charAllowed, passwordGenerator]);

//   // useRef Hook
//   const passwordRef = useRef(null);

//   const copyPasswordToClipBoard = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, length);
//     window.navigator.clipboard.writeText(password);
//   }, [password]);

//   return (
//     <>
//       <div
//         className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8
//       text-orange-500 bg-gray-700"
//       >
//         <h1 className="text-white text-center my-3">Password Generator</h1>
//         <div className="flex shadow rounded-lg overflow-hidden mb-4">
//           <input
//             type="text"
//             className="outline-none w-full bg-white text-dark py-1 px-3"
//             placeholder="Password"
//             value={password}
//             readOnly
//             ref={passwordRef}
//             onClick={copyPasswordToClipBoard()}
//           />

//           <button className="outline-nne bg-blue-700 text-white px-3 py-0.5 shrink-0">
//             Copy
//           </button>
//         </div>
//         <div className="flex text-sm gap-x-2">
//           <div className="flex items-center gap-x-1">
//             <input
//               type="range"
//               min={8}
//               max={16}
//               value={length}
//               className="cursor-pointer"
//               onChange={(e) => {
//                 setLength(e.target.value);
//               }}
//             />
//             <label htmlFor="">Length: {length}</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={numberAllowed}
//               id="numberInput"
//               onChange={() => {
//                 setNumberAllowed((prev) => !prev);
//               }}
//             />
//             <label htmlFor="numberInput">Numbers</label>
//           </div>
//           <input
//             type="checkbox"
//             defaultChecked={charAllowed}
//             id="charInput"
//             onChange={() => {
//               setCharAllowed((prev) => !prev);
//             }}
//           />
//           <label htmlFor="charInput">Characters</label>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "@$*&#_/";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //useRef

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white py-1 text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none bg-white w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              className="cursor-pointer"
              min={8}
              max={16}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
