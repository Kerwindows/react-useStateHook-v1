import React, {useState} from "react";



function App() {
  const time = new Date().toLocaleTimeString();

  const [isTime,setTime] = useState(time);
  const [isClock,setClock] = useState(time);

const getTime = () => {
  const newTime = new Date().toLocaleTimeString();
  setTime(newTime);
}

const getClock = () => {
  const newClock = new Date().toLocaleTimeString();
  setClock(newClock);
}
setInterval(getClock, 1000);

  return (
    <div className="container">
      <p>Clock</p>
      <h2>{isClock}</h2>
      <p>Button Click</p>
      <h1>{isTime}</h1>
      
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
