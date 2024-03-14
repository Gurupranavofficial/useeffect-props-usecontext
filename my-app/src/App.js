import React, { useEffect, useState } from 'react';

function App(Props) {

  const [count,setcount] = useState(0);
  const [time,settime] = useState(0);

  useEffect(() => {
    console.log("the counting happend");
  },[count])
  return (
    <div className="App">
          <center>
             <h1> {Props.name} from function component </h1>
          </center> 

        <center>
        <h3>{Props.yname} = {count}</h3> <br/>
        <button onClick={() => setcount(count+1) }>+</button>
        <button onClick={() => setcount(count-1) }>-</button>
        <br/>
         <h3>times = {time}</h3>
        <button onClick={() => settime(time+1) }>+</button>
        <button onClick={() => settime(time-1) }>-</button>
        </center>
    </div>
  );
}

export default App;
