import './App.css';
import React, { useState } from 'react';
//javascript XML 
//function App() {
  /*return   <>
  <h1> Welcome</h1>
 
  <Greet name="Santhoji"/><div>
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&psig=AOvVaw1Cf6OIfANE86UXJHPcwcT3&ust=1750329282819000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLi11uvi-o0DFQAAAAAdAAAAABAE" />
    </div>
</>
  const [count, setCount] = useState(0);
    return(
        <div>
            <p>you have clicked {count} times </p>
        <button onClick={() => setCount(count + 1)}>Click me</button></div>
    )*/

       /* function handleClick() {
            alert('Button clicked!');
        }
        return<button onClick={handleClick}>Click Me</button>
}*/

/*function App(isLoggedIn) {
  return isLoggedIn?<h4>Successfully loged in</h4>:<h4>Login failed</h4>;
  
}*/

/*function App() {
  const names=['a','b','c','d','e'];
  return(
    <ul>
      {
        names.map((name,index)=>(
          <li key={index}>{name}</li>
        )
      )
      }
    </ul>
  )
}*/

/*function App() { 
const [num1, setNum1] = useState('');
const [num2, setNum2] = useState('');
const [result, setResult] = useState(null);

function handleOperation(op) {
  const a = parseFloat(num1);
  const b = parseFloat(num2);
  if (isNaN(a) || isNaN(b)) {
    alert('Please enter valid numbers');
    return;
  }
  let res;
  if (op === '+') {
    res = a + b;
  } else if (op === '-') {
    res = a - b;
  } else if (op === '*') {
    res = a * b;
  } else if (op === '/') {
    if (b === 0) {
      alert('Cannot divide by zero');
      return;
    }
    res = a / b;
  } else {
    return;
  }
  setResult(res);
  alert(`Operation ${op} performed!`);
}

return (
  <div>
    <h2>Simple Calculator</h2>
    <input
      type="number"
      value={num1}
      onChange={e => setNum1(e.target.value)}
      placeholder="First number"
    />
    <input
      type="number"
      value={num2}
      onChange={e => setNum2(e.target.value)}
      placeholder="Second number"
    />
    <div>
      <button onClick={() => handleOperation('+')}>+</button>
      <button onClick={() => handleOperation('-')}>-</button>
      <button onClick={() => handleOperation('*')}>*</button>
      <button onClick={() => handleOperation('/')}>/</button>
    </div>
    {result !== null && (
      <h3>Result: {result}</h3>
    )}
  </div>
);
}
*/

import Calc from './Calc.js';

function App(){
  return(
     <div><h2>Simple Calculator</h2>
   <Calc />
  </div>
  );
 
}

export default App;
