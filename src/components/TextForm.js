import React, { useState } from 'react'

export default function TextForm(props) {
    const myStyle = {
        backgroundColor: props.mode === 'dark' ? 'black' : props.mode === 'light' ? 'white' : props.mode === 'primary' ? '#0d6efd' : props.mode === 'secondary' ? '#6c757d' : props.mode === 'success' ? '#198754' : props.mode === 'danger' ? '#dc3545' : props.mode === 'warning' ? '#ffc107' : props.mode === 'info' ? '#0dcaf0' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black',
        fontFamilly: 'cursive',
        fontSize: '20px',
        fontWeight: 'bold'

    }
    const handleupclick = () => {
        const newtext = Text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase", "success");
    }
    const handledownclick = () => {
        const newtext = Text.toLowerCase();
        setText(newtext);

        props.showAlert("Converted to Lowercase", "success");
    }
    const clear = () => {
        const newtext = "";
        setText(newtext);
        props.showAlert("Text cleared", "success");
    }
    const copy = (event) => {
        let text = document.getElementById("mybox");
        text.select();
        console.log(event)
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleextraspaces = () => {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
    const handletochange = (event) => {
        setText(event.target.value);
    }
    const [Text, setText] = useState("");

    return (
        <>
            <div className="container" style={myStyle}>
                <div className='container' style={myStyle}>
                    <h1 className="my-4" >{props.heading}</h1>
                    <div className="mb-3 my-3">
                        <textarea className="form-control" style={myStyle} value={Text} onChange={handletochange} id="mybox" rows="8"></textarea>
                    </div>

                    <button style={myStyle} className="btn btn-primary" onClick={handleupclick} >ToUpperCase</button>
                    <button style={myStyle} className="btn btn-primary mx-2" onClick={handledownclick} >ToLowerCase</button>
                    <button style={myStyle} className="btn btn-primary mx-2" onClick={clear} >Clear</button>
                    <button style={myStyle} className="btn btn-primary mx-2" onClick={copy} >copy text</button>
                    <button style={myStyle} className="btn btn-primary mx-2" onClick={handleextraspaces} >remove extra spaces</button>

                </div>
                <div className="container" style={myStyle}>
                    <h1>Your text summary</h1>
                    <p>({Text.trim() === "" ? 0 : Text.split(" ").length}) words and {Text.length} characters</p>
                    <p>{0.008 * Text.split(" ").length} minutes read</p>
                    <h3>Preview</h3>
                    <p>{Text.length > 0 ? Text : "Enter Something in the text box to preview the text "}</p>
                </div>

            </div>
        </>
    );

}