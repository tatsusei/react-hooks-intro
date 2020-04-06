import React, { useState, useEffect } from 'react';


function App() {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x:null, y:null })
  const [status, setStatus] = useState(navigator.onLine)

  useEffect(() => {
    document.title = `You have clicked ${count} time`
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('online', handleOnline)
    window.addEventListener('online', handleOffline)


    return () =>{
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('online', handleOffline)
  
    }
  },[count]);

  const handleMouseMove = event => {
     setMousePosition({
       x: event.pageX,
       y: event.pageY
     })
  }
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  const handleOnline = () => {
    setStatus(true)
  }

  const handleOffline = () => {
    setStatus(false)
  }

  const toggleLight = () =>{
    setIsOn(prevIsOn => !prevIsOn)

  }
  return (
    <>
    <h2> Toggle Light</h2>
    <img
      alt = "flashlight"
      src ={
        isOn
        ? 'https://icon.now.sh/highlight/fd0'
        :'https://icon.now.sh/highlight/aaa'
      }
      onClick={toggleLight}
      style={{
          height:'50px',
          width:'50px',
        //  background: isOn ? "yellow" : "grey"
      }}
    />
 
    <h2>Counter</h2>
    <button onClick={incrementCount}> I was clicked {count} times</button>

    <h2>Mouser Position</h2>
    {JSON.stringify(mousePosition, null, 2)}
    <br />

    <h2>Network Status</h2>
    <p>You are <strong> {status ? "online" : "offline" }</strong> </p>
    </>
  );
}

export default App;
