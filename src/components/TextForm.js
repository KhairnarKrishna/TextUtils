import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted text to uppercase !", "success");
    }
    
    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted text to lowercase !", "success");
    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text is deleted !", "warning");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleCExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are handled successfully !", "success");
    }

    const [text, setText] = useState('Enter text here ..');
    return (
        <>
        <div className='container' style={{color: props.mode === 'light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div class="mb-3" style={{color: props.mode === 'light'?'black':'white'}}>
                <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'#00212b', color: props.mode === 'light'?'black':'white'}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>
                Uppercase
            </button>
            <button className="btn btn-primary my-2 mx-1" onClick={handleLowClick}>
                Lowercase
            </button>
            <button className="btn btn-secondary my-2 mx-1" onClick={handleCopy}>
                Copy
            </button>
            <button className="btn btn-danger my-2 mx-1" onClick={handleClearClick}>
                Clear
            </button>
            <button className="btn btn-warning my-2 mx-1" onClick={handleCExtraSpaces}>
                Remove Extra Spaces
            </button>
        </div>

        <div className='container my-3' style={{color: props.mode === 'light'?'grey':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
