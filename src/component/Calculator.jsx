// // src/Calculator.js
// import React, { useState } from 'react';

// function Calculator() {
//     const [input, setInput] = useState("");

//     const handleClick = (e) => {
//         setInput(input.concat(e.target.name));
//     }

//     const clear = () => {
//         setInput("");
//     }

//     const backspace = () => {
//         setInput(input.slice(0, -1));
//     }

//     const calculate = () => {
//         try {
//             setInput(eval(input).toString());
//         } catch (error) {
//             setInput("Error");
//         }
//     }

//     return (
//         <div className="calculator">
//             <form>
//                 <input type="text" value={input} readOnly />
//             </form>
//             <div className="keypad">
//                 <button id="clear" onClick={clear}>Clear</button>
//                 <button id="backspace" onClick={backspace}>C</button>
//                 <button name="/" onClick={handleClick}>&divide;</button>
//                 <button name="7" onClick={handleClick}>7</button>
//                 <button name="8" onClick={handleClick}>8</button>
//                 <button name="9" onClick={handleClick}>9</button>
//                 <button name="*" onClick={handleClick}>&times;</button>
//                 <button name="4" onClick={handleClick}>4</button>
//                 <button name="5" onClick={handleClick}>5</button>
//                 <button name="6" onClick={handleClick}>6</button>
//                 <button name="-" onClick={handleClick}>&ndash;</button>
//                 <button name="1" onClick={handleClick}>1</button>
//                 <button name="2" onClick={handleClick}>2</button>
//                 <button name="3" onClick={handleClick}>3</button>
//                 <button name="+" onClick={handleClick}>+</button>
//                 <button name="0" onClick={handleClick}>0</button>
//                 <button name="." onClick={handleClick}>.</button>
//                 <button id="result" onClick={calculate}>=</button>
//             </div>
//         </div>
//     );
// }

// export default Calculator;
