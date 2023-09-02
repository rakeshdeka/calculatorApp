

import './App.css'

function App() {
  const values = [7, 8, 9, '/', 4, 5, 6, 'x', 1, 2, 3, '-', 0, '.', '=', '+']
  const handleClick = (value) => {
    console.log(`you clicked ${value}`);

  }

  return (
    <>
      <div id="container">
        <h1>Calculator</h1>

        <div className="main-input">
          <input type="number" placeholder="0"></input>

        </div>
        <div className="all-btn">
          {values.map((value, index) => (
            <button key={index} onClick={() => handleClick(value)} className="btn">{value}</button>
          ))}

        </div>
      </div>

    </>
  )
}

export default App
