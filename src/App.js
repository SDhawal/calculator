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
      <div className="display-screen">{input}</div>
      <div className="buttons grey" onClick={reset} >AC</div>
      <div className="buttons grey" onClick={plusMinus} >+/-</div>
      <div className="buttons grey" onClick={percent} >%</div>
      <div className="buttons orange" onClick={operatorType}>÷</div>
      <div className="buttons dark-grey" onClick={inputNumber}>7</div>
      <div className="buttons dark-grey" onClick={inputNumber}>8</div>
      <div className="buttons dark-grey" onClick={inputNumber}>9</div>
      <div className="buttons orange" onClick={operatorType}>X</div>
      <div className="buttons dark-grey" onClick={inputNumber}>4</div>
      <div className="buttons dark-grey" onClick={inputNumber}>5</div>
      <div className="buttons dark-grey" onClick={inputNumber}>6</div>
      <div className="buttons orange" onClick={operatorType}>-</div>
      <div className="buttons dark-grey" onClick={inputNumber}>1</div>
      <div className="buttons dark-grey" onClick={inputNumber}>2</div>
      <div className="buttons dark-grey" onClick={inputNumber}>3</div>
      <div className="buttons orange" onClick={operatorType}>+</div>
      <div className="buttons wide-dark-grey"onClick={inputNumber}>0</div>
      <div className="buttons dark-grey">.</div>
      <div className="buttons orange" onClick={equals}>=</div>



      </div>
     
    </div>
  );
}

export default App;
