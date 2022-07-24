import React from 'react'
import { useState } from 'react'
import Todo from './Todo';
import './App.css'

function App() {
  let [inputval, setInputval] = useState("enter text");
  let [arr, setArr] = useState([]);
  function inputHandler(e) {
    setInputval(e.target.value);
  }
  function formHandler(e) {
    e.preventDefault();
    let data = inputval;
    setArr([...arr, data]);
    setInputval('');
 }
  function buttonClick(a) {
    const newArr = arr.filter((curEle, index) => {
      return index !== a;
    })
    setArr(newArr);
  }

  return (
    <>
      <div className='main container'>
        <form className="form" onSubmit={formHandler}>
          <input type="text" value={inputval} onChange={inputHandler} />
          <span>
            <button  className="btn2 btn">Add-Todo</button>
          </span>
        </form>
        <ul style={{ listStyle: "none" }}  className="main-list">
          <h3>Your Tasks</h3>
          {arr.map((item, index) => {
            return <Todo key={index}
              id={index}
              clickHandler={buttonClick}
              value={item}>
            </Todo>
          })}
        </ul>
      </div>
    </>
)}export default App;
