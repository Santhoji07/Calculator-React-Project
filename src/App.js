import './App.css';
import Greet from './greet'; 
import React, { useState } from 'react';
//javascript XML 
function App() {
  /*return   <>
  <h1> Welcome</h1>
 
  <Greet name="Santhoji"/><div>
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&psig=AOvVaw1Cf6OIfANE86UXJHPcwcT3&ust=1750329282819000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLi11uvi-o0DFQAAAAAdAAAAABAE" />
    </div>
</>*/
  const [count, setCount] = useState(0);
    return(
        <div>
            <p>you have clicked {count} times </p>
        <button onClick={() => setCount(count + 1)}>Click me</button></div>
    )
}

export default App;
