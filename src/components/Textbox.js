import React, { useState } from 'react'


export default function Textbox() {

  
  const handleUpclick = () => {
    console.log("Uppercase clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnchange = (event) => {
    console.log("on change");
    setText(event.target.value)
  }
  
  const [text, setText] = useState('');


  return (
    <div>

      <h1>ENTER TOUR TEXT-</h1>
      <div className="mb-3">
        <textarea className="form-control"  value={text} placeholder='Enter your text' onChange={handleOnchange} id= "myBox" cols="30" rows="10"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpclick}> convert to Upprcase</button>
    </div>
  );
}
