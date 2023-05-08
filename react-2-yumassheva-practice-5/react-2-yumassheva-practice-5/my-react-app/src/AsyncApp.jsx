import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchName } from "./RTK/RTKreducer";

function AsyncApp() {
  const dispatch = useDispatch();
  const start = useSelector(state=> state.toolkit.start)

   const [inputValue, setInputValue] = useState('');
  const getInputValue = (e) => {
    setInputValue(e.target.value);
  };
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(fetchName(inputValue))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={getInputValue}></input>
        <button onClick={() => dispatch(fetchName(inputValue))}>Know</button>
      </form>
      <div>{`${start.name} is ${start.gender}`}</div>
    </div>
  );
  }

export { AsyncApp }
