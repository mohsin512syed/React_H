import { useEffect, useState } from 'react'

const Effect1 = () => {
  const [count, setCount] = useState(0)
//   useEffect(() => {
//     console.log("mounted")
//   }, []);//first time jb component render hota hai
//   useEffect(() => {
//     console.log("updated state")
//   });//jb bh hmara componet rerender hota hai means state koi bh update hoti hai
//   useEffect(() => {
//     console.log("updates with dependecies")
//   }, [count]);
  useEffect(() => {
    const onMouseDown = () => {
      console.log("mouseenter")
    }
    window.addEventListener("mousedown", onMouseDown);
    return()=> (
      console.log("cleanup"),
      window.removeEventListener("mousedown", onMouseDown)
    )
  })
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click here</button>
    </div>
  )
}
export default Effect1;