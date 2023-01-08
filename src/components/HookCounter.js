import React, {useState} from 'react'



function HookCounter() {

    const [count, setCount] = useState(0)

  return (
    <>
    <h1>
      Asslamualaikum! <br></br> Welcome to Online Tasbih 
    </h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Count</button>
    </>
  )
}

export default HookCounter