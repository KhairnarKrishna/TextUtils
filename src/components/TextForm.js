import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    
    const handleLowClick = () => {
        setText(text.toLowerCase());
    }

    const handleClearClick = () => {
        setText('');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here ..');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>
                Uppercase
            </button>
            <button className="btn btn-secondary mx-3" onClick={handleLowClick}>
                Lowercase
            </button>
            <button className="btn btn-danger" onClick={handleClearClick}>
                Clear
            </button>
        </div>
    )
}
