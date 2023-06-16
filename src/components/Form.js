import React, { useState } from 'react';

export default function Form(props) {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperclick = () =>{
    let t = text;
    setText(t.toUpperCase());
  }
  const handleLowerclick = () =>{
    let t = text;
    setText(t.toLowerCase());
  }
  const handleClearclick = () =>{
    setText("");
  }
  const handleCopyclick = () =>{
    navigator.clipboard.writeText(text);
    
  }

  return (
    <> <br/><br/>
{props.alert!==null? (<div className="alert alert-success" role="alert">
  {props.alert}
</div>):( <h1></h1> ) }

      <div className="container">
        <div className="mb-6">
          <label htmlFor="exampleFormControlTextarea1" className="form-label" tyle={{ color:props.color }}>Enter Your Text Below</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            onChange={handleTextChange}
            value={text}
          ></textarea>
        </div>
        
 <button className="btn btn-primary my-3 mx-3" onClick={() => { handleUpperclick(); props.showAlert("Converted To UpperCase", "success"); }}>UpperCase</button>
<button className="btn btn-primary my-3" onClick={() => { handleLowerclick(); props.showAlert("Converted To LowerCase", "success"); }}>LowerCase</button>
<button className="btn btn-primary my-3 mx-3" onClick={() => { handleClearclick(); props.showAlert("Text Cleared", "success"); }}>Clear Text</button>
<button className="btn btn-primary my-3 mx-3" onClick={() => { handleCopyclick(); props.showAlert("Text Copied Successfully", "success"); }}>Copy Text</button>


      </div>
      <div className="container">
        <h1 style={{ color:props.color}}>Total Words:{text.trim() === '' ? 0 : text.trim().split(/\s+/).length}</h1>
        <h1 style={{ color:props.color }} >Total Characters:{text.replace(/\s/g, '').length}</h1>
        <h1 style={{ color:props.color }}>Time To Read: Less Than {parseInt(text.replace(/\s/g, '').length * 0.008)} Minutes</h1>
      </div>
    </>
  );
}
