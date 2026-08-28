import React, { useMemo, useReducer, useState } from 'react'
import useCounter from './useCounter'
import { useLocation, useNavigate, useParams } from 'react-router'

const RoughWork = () => {

 const navigate = useNavigate();
 const param = useParams();
 const loc = useLocation()
 console.log(param,'rammm',loc)

  const reducer = (state,data) => {
    if(data == 'increment'){
      navigate('/signup')
      return state+1
    }else{
      return state-1
    }

  }
  const [count,dispacth] = useReducer(reducer,0)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      count: {count}
      <button onClick={(e) =>{dispacth('increment')}}>Add</button>
      <button onClick={(e) =>{dispacth('decrement')}}>Subtract</button>
    </div>
  )
}

export default RoughWork
