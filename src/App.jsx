import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('0')
  const [result, setResult] = useState('')

  const handleClickNumbers = (event) =>{
    var value = event.target.innerText
    console.log(inputValue);
    if(inputValue === '0'){
      setInputValue(value)
    }
    else{
      setInputValue(inputValue + value)
    }
  }

  const preventDots = (event) =>{
    const hasOneDot = /^[^.]*\.[^.]*$/.test(inputValue);
    if(hasOneDot){
      setInputValue(inputValue)
    }
    else{
      handleClickNumbers(event);
    }
  }

  const reset = () =>{
    setInputValue('0')
    setResult('')
  }
  const evaluate = () => {
    var decimalPlaces = 4
    setInputValue(
      parseFloat(eval(inputValue).toFixed(decimalPlaces)).toString()
    )
  }

  return (
    <>
      <h1>Calculator</h1>
      <div className='my-container'>
        <div className='text-fields'>
          <input type='text' id='display' value={inputValue}/>
          <input type='text'  value={result}/>
        </div>
        <div className='buttons'>
          <button id='clear' onClick={reset}>AC</button>
          <button id='divide' onClick={handleClickNumbers}>/</button>
          <button id='multiply' onClick={handleClickNumbers}>*</button>
          <button id='one' onClick={handleClickNumbers}>1</button>
          <button id='two' onClick={handleClickNumbers}>2</button>
          <button id='three' onClick={handleClickNumbers}>3</button>
          <button id='add' onClick={handleClickNumbers}>+</button>
          <button id='four' onClick={handleClickNumbers}>4</button>
          <button id='five' onClick={handleClickNumbers}>5</button>
          <button id='six' onClick={handleClickNumbers}>6</button>
          <button id='subtract' onClick={handleClickNumbers}>-</button>
          <button id='seven' onClick={handleClickNumbers}>7</button>
          <button id='eight' onClick={handleClickNumbers}>8</button>
          <button id='nine' onClick={handleClickNumbers}>9</button>
          <button id='equals' onClick={evaluate}>=</button>
          <button id='zero' onClick={handleClickNumbers}>0</button>
          <button id='decimal' onClick={preventDots}>.</button>
        </div>
        <p>Designed by</p>
        <h3>EL GENIO</h3>
      </div>
    </>
  )
}

export default App
