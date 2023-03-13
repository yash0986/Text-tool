import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props){

    const [text, setText]= useState('Enter text here');

    const handleUpClick = () => {
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLoClick = () => {
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")

    }
    const handleClear= () => {
        setText("");
        props.showAlert("Text cleared", "success")

    }
    const handleCopy= () => {
        const text= document.querySelector("#myBox");
        text.select();
        navigator.clipboard.writeText(text.textContent);
        props.showAlert("Copied to clipboard", "success")

    }
    const handleCorrectSpacing= () => {
        const newText= (text.split(/[ ]+/)).join(" ");
        setText(newText);
        props.showAlert("Correct spacing done", "success")

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // setText("");
    return (
        <>
        <div style={{color: props.mode==='light'? 'black' : 'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{color: props.mode==='light'? 'black' : 'white' ,backgroundColor: props.mode==='light'? 'white' : 'grey'} } value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleCorrectSpacing}>Correct spacing</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'? 'black' : 'white'}}>
            <h2> Your text summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}