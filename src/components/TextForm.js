import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclearText = () => {
        setText('');
    }
    const handleCopy = () => {
        let newText = document.getElementById('floatingTextarea');
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }; 
    const extraSpaces = () => {
        let newText = text.split(/[ ] +/) ;
        setText(newText.join(' '));
    };

    function countWords() {
        if(text.length === 0)
            return 0;
        else
            return text.split(" ").length;
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");
  return (
    <div>
        <div className="container my-4">
            <div className="form">
                <h2>{props.heading}</h2>
                <textarea className="form-control" id="floatingTextarea" rows={8} value={text} onChange={handleOnChange}></textarea>

                <div className="row mt-2">
                    <div className="col-auto">
                        <button className="btn btn-primary" onClick={handleUpClick}>to UpperCase</button>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary" onClick={handleLoClick}>to LowerCase</button>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary" onClick={handleclearText}>Clear Text</button>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary" onClick={extraSpaces}>Extra Spaces</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="container my-3">
            <h2>Your text summary</h2>
            <p> { countWords() } words and { text.length } characters </p>
            <p> { 0.008 * countWords() } minutes read </p>
            <p>Preview</p>
            <p> { text } </p>
        </div>
    </div>
  )
}
