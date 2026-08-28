import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'

const Set = () => {

    let [data, setData] = useState({ name: '', rollno: '' })
  let [todo, SetTodo] = useState('')

  let url = 'https://dummyjson.com/todos'
  const checkdata = async () => {
    console.log(data, 'rammm')
    let response = await axios.get(url);
    console.log('response', response.data.todos)
    if (response && response.data.todos && response.data.todos.length) {
      SetTodo(response.data.todos)
    }
  }

  useEffect(() => {
    checkdata()
  }, [])
  return (
    <div className='main'>
        <label >Name</label>
        <input type="text" name="rest" className="md" value={data?.name} onChange={(e) => {setData
( {...data, name: e.target.value}) 
        }
         
        } />
        <label >Rollno</label>
        <input type="text" name="rest" className="md"  value={data?.rollno} onChange={(e) => setData({...data,rollno:e.target.value})}  />
        <button type="submit" onClick={checkdata}>Submit</button>
      </div>
  )
}

export default Set
