import React from 'react'

function Todo(props) {
    console.log(props);
    return (
        <>
            <div className="inner">
              <li className="list">
                {props.value}<span><button className="btn btn1" onClick={()=>{props.clickHandler(props.id)}}>X</button></span> 
              </li>
            </div>
        </>
    )
}
export default Todo;