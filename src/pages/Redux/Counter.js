import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT } from './Actions/action';
import { actionDec, actionInc } from './Actions/CounterAction';

export default function Counter() {

    const count=useSelector(state => state.count)

    const dispatch = useDispatch()
    

    const inc= () =>
    {
       dispatch(actionInc()) 
    }

    const dec= () =>{
        dispatch(actionDec())
           
        
     }
  return (
    <div>
    <div>{count}</div>
    <button onClick={inc}>increment</button>
    <button onClick={dec}>decrement</button>
    
    </div>
  )
}
