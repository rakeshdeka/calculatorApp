
import { useState } from 'react';
import './App.css'
import { items } from './constants';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  console.log(`useState: ${input}`)

  const handleClick = (item) => {

    if (item === '=') {
      setResult((eval(input)));
      setInput('');
    } else if (item === 'C') {

      setInput('');
      setResult('');
    } else {
      console.log(`item ${item}`);


      setInput((prevInput) => prevInput + item);
      console.log(`prev :${input}`)

    }
  };

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center p-2  rounded-lg shadow-2xl bg-black'>
          <div className='w-[50vw] h-[50vh] flex flex-col shadow-xl'>
            <h1 className='rounded-t-lg text-center bg-[#4B4B92] text-white py-2 font-mono'>Calculator</h1>

            <div className=" w-full h-20 bg-[#FFF3DA] ">
              {result ? (
                <p className='h-full bg-[#222E35] text-white text-right flex justify-end items-center text-2xl px-2 '>{result}</p>
              ) : (
                <input
                  type="text"
                  placeholder="0"
                  readOnly
                  value={input}
                  className='w-full h-full text-white text-right text-2xl px-2 focus:outline-none bg-[#222E35]'
                />
              )}
            </div>
            <div className="grid grid-cols-4 grid-rows-4 gap-1 bg-white shadow-md h-full rounded-b-lg">
              {items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(item)}
                  className=' btn text-2xl text-white bg-[#655796] hover:bg-[#2d164e] rounded-lg m-1'
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
