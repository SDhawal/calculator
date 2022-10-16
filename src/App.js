import './App.css';
import {  useState,useEffect } from 'react';
import { NumericFormat } from 'react-number-format';

function App() {
const [preState,setPreState] = useState("")
const [currState,setCurrState] = useState("")
const [input,setInput] = useState("0")
const [operator ,setOperator] = useState(null)
const [total,setTotal] = useState(false)

const inputNumber = (e) =>{
if(currState.includes(".") && e.target.innerText === ".") return
if(total){
  setPreState("");
  // if equal will be clicked then total will be true and then out program will stop calculation further
}
currState ? setCurrState ((pre) => pre + e.target.innerText) : setCurrState(e.target.innerText);
// this will concatinate the text which user will feed in the display screen
setTotal (false);
};

useEffect(()=>{
  setInput(currState);
},[currState])
// this will display the numbers and the things in the input screen

useEffect(()=>{setInput("0")},[]);

const operatorType = e =>{
  setTotal(false);
  setOperator(e.target.innerText);
  if (currState === "") return;
  if (preState !== "") {
    console.log("clicked")
    equals();
   
  }else{
    setPreState(currState);
    setCurrState("");
  }
};

const equals = (e) =>{
if(e?.target.innerText === '='){
  console.log("executed")
  setTotal(true);
}

let cal
switch (operator){
  case "/":
    cal = String(parseFloat(preState)/parseFloat(currState)
    );
    break;
  case "+":
    cal = String(parseFloat(preState)+parseFloat(currState)
    );
    break;
  case "-":
    cal = String(parseFloat(preState)-parseFloat(currState)
    );
    break;
  case "X":
    cal=String(parseFloat(preState)*parseFloat(currState)
    );
    break;
    default:
    return
}
setInput("")
setPreState(cal)
setCurrState("")
}
const plusMinus = () =>{
if(currState.charAt(0) === "-"){
  setCurrState(currState.substring(1));
}else{
  setCurrState("-" + currState);
}
}
const reset = () =>{
setPreState("");
setCurrState("");
setInput("0");
}
const percent = e =>{
preState ? currState(String(parseFloat(currState) / 100) * preState) : 
            currState(String(parseFloat(currState)/100));
}
  return (
    <div className="container">
      <div className='wrapper'>
      <div className="display-screen">{
      input !== "" || input === "0" ?
       <NumericFormat value = {input}
         displayType={'text'}
         thousandSeparator={true}/> : 
       <NumericFormat value={preState}
         displayType={'text'}
         thousandSeparator={true}/>
         }
         </div>
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
      <div className="buttons dark-grey"onClick={inputNumber}>.</div>
      <div className="buttons orange" onClick={equals}>=</div>



      </div>
     
    </div>
  );
}

export default App;
