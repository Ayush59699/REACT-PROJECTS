import React, { useState } from 'react'
import ropTypes from 'prop-types'



export default function Textform(props) {
    const handleUpClick= ()=>{
        //console.log("Upeprcase was clicked" + text)
        let newText=text.toUpperCase();

        setText(newText)
    }
    const handleOnChange =(event)=>{
        //console.log("HandleChange clicked")
        setText(event.target.value) // type hona allow krdega 
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    
    const [text, setText] = useState('Enter text here');
    
    return (
    <>

            <div className="container"><br />
                <h1>  {props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value= {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>UPPERCASE Button</button>
                <button className="btn btn-primary" onClick={handleLoClick}> lowercase Button</button>

            </div> 




    </>
    )
}
