import React from "react"
import "./Person.css"

const Person = (props) => {
return (
    <div className="Person">
        <p onClick={props.click}>Sono una persona!Il mio nome è {props.name} e la mia eta è di {props.age} anni!
        {props.children}
        </p>
        <input type="text" onChange={props.changed} ></input> 
    </div>
    )
}

export default Person