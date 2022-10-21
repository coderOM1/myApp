import React, {useState} from 'react'

export default function Form(props) {
   const handleUpClick = ()=>
   {
    console.log("Button Was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Caps", "info");
   }

   const handleOnChange = (event)=>
   {
    console.log("Button Was Clicked");
    setText(event.target.value)

   }
   const handleClear = ()=>
   {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared", "info");
   }
   const handleCopy = ()=>
   {
    let word = document.getElementById("exampleFormControlTextarea1")
    word.select();
    navigator.clipboard.writeText(word.value);
    props.showAlert("Copied!", "info");
   }
    const [text, setText] = useState("");

    return (
        <>
        <div className='container'>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange}  id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Capitalize</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        </div>
        <div className="container my-3">
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} chars</p>
            <p>{text}</p>
        </div>
        </>
    )
}
