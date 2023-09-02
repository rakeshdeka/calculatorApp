

import { useState } from 'react';
import './App.css'

function App() {
  const [values, setValues] = useState('')
  const items = [7, 8, 9, '/', 4, 5, 6, 'x', 1, 2, 3, '-', 0, '.', '=', '+']
  const handleClick = (e) => {


  }

  return (
    <>
      <div id="container">
        <h1>Calculator</h1>

        <div className="main-input">
          <input
            type="number" placeholder="0"></input>

        </div>
        <div className="all-btn">
          {items.map((item, index) => (
            <button key={index} onClick={() => handleClick(item)} className="btn">{item}</button>
          ))}

        </div>
      </div>

    </>
  )
}

export default App
