import React, { useState } from 'react'
import Text from './Text';

export default function Form(props) {

    const [text, setText] = useState("");
    //* text ="new text";    // wrong way to change the state 
    //* setText("new text"); // correct way to change the state

    const handleOnChange = (e) => {
        // console.log("On change");
        setText(e.target.value)
    }
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" );
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upperase", "success");
    }
    const handleLoClick = () => {
        // console.log(LowerCase was clicked" );
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowerase", "success");
    }
    const handleReClick = () => {
        // console.log("remove was clicked" );
        setText("");
        props.showAlert("text cleared ", "success");
    }
    const handleRenClick = () => {
        // console.log("name was clicked" );
        setText("Hello Sandeep Gurjar");
        props.showAlert("your Name", "success");
    }
    const handleResClick = () => {
        // console.log("remove space was clicked" );
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra spaces removed", "success");
    }
    const handleCtClick = () => {
        // console.log("copy text was clicked");
        var text = document.getElementById("box");
        // text.Select();
        // text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("copy to clipboard", "success");

    }

    return (
        <>
            <div>
                <center>
                    <div className="container-fluid" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <h2 >converat to youre text</h2>
                        <textarea cols="80" rows="10" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'white' : 'gray', color: props.mode === 'dark' ? 'black' : 'white' }} onChange={handleOnChange} id='box' > </textarea>
                        <center>
                            <button type="button" className="btn btn-primary" onClick={handleUpClick}  > Uppercase </button>
                            <button type="button" className="btn btn-danger" onClick={handleLoClick} > lowercase </button>
                            <button type="button" className="btn btn-warning" onClick={handleReClick} > Remove </button>
                            <button type="button" className="btn btn-info" onClick={handleRenClick}> Youre name </button>
                            <button type="button" className="btn btn-success" onClick={handleResClick}> Remove space </button>
                            <button type="button" className="btn btn-primary" onClick={handleCtClick}> Copy text </button>
                        </center>
                    </div>
                </center>
                <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                    <h2 >youre text sumary</h2>
                    {/* <p>{text.split(" ").length} word</p>
                    <p>{text.length} charcter</p> */}
                    <p> {text.split(" ").length} word {text.length} charcter</p>
                    <p>
                        {0.008 * text.length} it's taken so long
                    </p>
                    <h2> Text preview</h2>
                    <p>{text.length > 0 ? text : "Enter somethink in the textbox above to preview it here"}</p>
                </div>
            </div>
        </>
    )
}

