import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'
const App = () => {
  let [count, setCount] = useState(0);

  useEffect(async () => {
    try{
    let fetchs = await fetch('http://localhost:3000/feed');
    const user = await fetchs
    console.log(user)
    }catch(e){
  console.log(e.message)
    }

  },[])



  return (
    <div>
      shubham is a great guy <h1 onClick={() => { }}>{count}</h1>

      <div className='lg'>
        <span className='sm' onClick={() => { setCount(count + 1) }}>Inc</span>
        <span className='sm' onClick={() => { if (count > 0) setCount(count - 1) }}>dec</span>
      </div>
    </div>
  )
}

export default App
