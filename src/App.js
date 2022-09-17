import {  useState,useEffect } from 'react';
import './App.css';


function App() {
const [preState,setPreState] = useState("")
const [currState,setCurrState] = useState("")
const [input,setInput] = useState("0")
const [operator ,setOperator] = useState(null)
const [total,setTotal] = useState(false)

const inputNumber = e =>{

}

const operatorType = e =>{

}

const equals = e =>{

}
const plusMinus = () =>{

}
const reset = () =>{

}
const percent = e =>{

}
  return (
    <div className="container">
      <div className='wrapper'>
      <div className="display-screen"></div>
      <div className="grey-buttons" onClick={reset} >AC</div>
      <div className="grey-buttons" onClick={plusMinus} >+/-</div>
      <div className="grey-buttons" onClick={percent} >%</div>
      <div className="orange-buttons" onClick={operatorType}>÷</div>
      <div className="dark-grey-buttons" onClick={inputNumber}>7</div>
      <div className="dark-grey-buttons" onClick={inputNumber}>8</div>
      <div className="dark-grey-buttons" onClick={inputNumber}>9</div>
      <div className="orange-buttons" onClick={operatorType}>X</div>
      <div className="dark-grey-buttons" onClick={inputNumber}>4</div>
      <div className="dark-grey-buttons" onClick={inputNumber}>5</div>
      <div className="dark-grey-buttons" onClick={inputNumber}>6</div>
      <div className="orange-buttons" onClick={operatorType}>-</div>
      <div className="dark-grey-buttons" onClick={inputNumber}>1</div>
      <div className="dark-grey-buttons" onClick={inputNumber}>2</div>
      <div className="dark-grey-buttons" onClick={inputNumber}>3</div>
      <div className="orange-buttons" onClick={operatorType}>+</div>
      <div className="wide-dark-grey-button"onClick={inputNumber}>0</div>
      <div className="dark-grey-buttons">.</div>
      <div className="orange-buttons" onClick={equals}>=</div>



      </div>
     
    </div>
  );
}

export default App;
