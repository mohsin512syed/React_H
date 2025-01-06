import { useState } from 'react';


export default function Counter() {
    const[count , setcount]=useState(0)
    const[random , setrandom]=useState(0)
    const incrementWithDirect=()=>{
        setcount(count+1);
        setcount(count+1);
    }
    const incrementWithFunction=()=>{
        setcount(prev=>prev+1);
        setcount(prev=>prev+1);
    }
    const generateRandomValue=()=>{
        let rand = Math.floor(Math.random()*10)
        setrandom((prev)=>{
            console.warn(prev)
            return rand
        })
    }
    console.log("redenred outside");
  return (
    <div>
      <p>count : {count}</p>
      <br />
      <p>random value {random}</p>
      <button onClick={incrementWithDirect}>Increment Direct</button>
      <button onClick={incrementWithFunction}>Increment use prev</button>
      <button onClick={generateRandomValue}>generate random value</button>
    </div>
  )
}
