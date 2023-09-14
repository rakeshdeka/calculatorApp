

import { useState } from 'react';
import './App.css'
import { items } from './constants';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  console.log(`useState: ${input}`)

  const handleClick = (item) => {
    if (item === '=') {
      console.log(`item ${input}`)
      try {
        const calculatedResult = eval(input);
        setResult(calculatedResult);
        setInput('');
      } catch (error) {
        setResult('Error');
      }
    } else if (item === 'C') {

      setInput('');
      setResult('');
    } else {

      setInput((prevInput) => prevInput + item);
      console.log(`prev :${input}`)
    }
  };

  return (
    <>
      <div id="container">
        <h1>Calculator</h1>

        <div className="main-input">
          <input
            type="text"
            placeholder="0"
            readOnly
            value={input}
          />

        </div>
        <div className="all-btn">
          {items.map((item, index) => (
            <button key={index} onClick={() => handleClick(item)} className="btn">{item}</button>
          ))}

        </div>
        <p> Result: {result}</p>
      </div>

    </>
  )
}

export default App
