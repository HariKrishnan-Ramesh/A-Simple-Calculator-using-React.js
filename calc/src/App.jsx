import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [num,SetNum]=useState('')

  const [result,SetResult]=useState('0')
 
  const handleClick = value =>{
    SetNum(num+value)
  }

  const del_back = () => {
     const delback = num.slice(0,-1)
     SetNum(delback)
     SetResult('')
  }

  const calculate_result = () =>{

    try{
    const display = eval(num)
    SetResult(display)
    }
    catch(error){
      SetResult("Math Error")
    }
  }

  const clear_display = () => {
    SetNum('')
    SetResult('')

  }




  return (

    <div>

      <div className='wrapper'>
        
        <input value={num} ></input>
       
        <input className='in2' value={result} ></input>
        

        <button className='btnAC' onClick={clear_display}>C</button>
        <button className='btnC' onClick={del_back}>AC</button>
        <button className='btnMod' onClick={() => handleClick('%')}>%</button>
        <button className='btnD' onClick={() => handleClick('/')}>/</button>

        <button className='btn7' onClick={()=>handleClick('7')}>7</button>
        <button className='btn8' onClick={() => handleClick('8')} >8</button>
        <button className='btn9'onClick={() => handleClick('9')}>9</button>
        <button className='btnMu'onClick={() => handleClick('*')}>*</button>

        <button className='btn4'onClick={() => handleClick('4')}>4</button>
        <button className='btn5'onClick={() => handleClick('5')}>5</button>
        <button className='btn6'onClick={() => handleClick('6')}>6</button>
        <button className='btnS'onClick={() => handleClick('-')}>-</button>

        <button className='btn1'onClick={() => handleClick('1')}>1</button>
        <button className='btn2'onClick={() => handleClick('2')}>2</button>
        <button className='btn3'onClick={() => handleClick('3')}>3</button>
        <button className='btnAd'onClick={() => handleClick('+')}>+</button>

        <button className='btn0' onClick={() => handleClick('0')}>0</button>
        <button className='btnDot' onClick={() => handleClick('.')}>.</button>
        <button className='btnEquals'onClick={calculate_result} >=</button>

      </div>
    
    </div>
  )
}

export default App

