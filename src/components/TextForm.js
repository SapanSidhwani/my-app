import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!", "success");
    }
    const handleclearText = () => {
        setText('');
        props.showAlert("Text Cleared!", "success");
    }
    const handleCopy = () => {
        let newText = document.getElementById('floatingTextarea');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
    };
    const extraSpaces = () => {
        let newText = text.split(/[ ] +/);
        setText(newText.join(' '));
        props.showAlert("Extra spaces have been moved out!", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");

    let words = text.split(" ").filter((element) => { return element.length !== 0 }).length;

    return (
        <div>
            <div className="container my-4">
                <div className="form">
                    <h2>{props.heading}</h2>
                    <textarea className="form-control" id="floatingTextarea" rows={8} value={text} onChange={handleOnChange}></textarea>

                    <div className="row mt-2 g-3">
                        <div className="col-auto">
                            <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>to UpperCase</button>
                        </div>
                        <div className="col-auto">
                            <button disabled={text.length === 0} className="btn btn-primary" onClick={handleLoClick}>to LowerCase</button>
                        </div>
                        <div className="col-auto">
                            <button disabled={text.length === 0} className="btn btn-primary" onClick={handleclearText}>Clear Text</button>
                        </div>
                        <div className="col-auto">
                            <button disabled={text.length === 0} className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
                        </div>
                        <div className="col-auto">
                            <button disabled={text.length === 0} className="btn btn-primary" onClick={extraSpaces}>Extra Spaces</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-3">
                <h2>Your text summary</h2>
                <p> {words} words and {text.length} characters </p>
                <p> {0.008 * words} minutes read </p>
                <p>Preview</p>
                <p> {text.length > 0 ? text : "Nothing to preview"} </p>
            </div>
        </div>
    )
}
