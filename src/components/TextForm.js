import React from 'react'
import { useState } from 'react'

export default function TextForm() {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = (event) => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");
  return (
    <div>
        <div className="container my-4">
            <div className="form">
                <textarea className="form-control" id="floatingTextarea" rows={8} value={text} onChange={handleOnChange}></textarea>

                <div className="row mt-2">
                    <div className="col-auto">
                        <button className="btn btn-primary" onClick={handleUpClick}>to UpperCase</button>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary" onClick={handleLoClick}>to LowerCase</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
