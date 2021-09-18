import React from 'react';



const ToDo = (props)=>{

   
    return (
        <>
        <div className="todo">
            <button 
                className="deleteBtn"
                onClick = {()=>{
                    props.selected(props.id)
            }}>Delete</button>
            <li className="todoText">{props.text}</li>
        </div>
        </>
    )
}
export default ToDo;