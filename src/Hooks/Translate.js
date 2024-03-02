import React, {useState} from 'react'

export default function Translate() {

     const [text, setText] = useState('');

    const handleOnclick1=()=>{
    console.log('UPPERCASE');
    let newText1 = text.toUpperCase();
    setText(newText1)
    }
    
    const handleOnclick2=()=>{
     console.log('lowercase');
     let newText2 = text.toLowerCase();
     setText(newText2)
    }
    
    const handleOnclick3=()=>{
        let newText3 = '';
        setText(newText3);
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }


    return (

        <>
            <div className='text-center mt-5'>
            <div className='mb-3'>Enter your text</div>
            <textarea className="form-control" value={text} placeholder='Your text here' onChange={handleOnChange} cols="30" rows="10"></textarea>
         
            <div >
                <div className='btn btn-primary text-white ' onClick={handleOnclick1}>
                    <button>UPPERCASE</button>
                </div>

                <div className='btn btn-primary text-white ' onClick={handleOnclick2}>
                    <button>LOWERCASE</button>
                </div>

                <div className='btn btn-primary text-white ' onClick={handleOnclick3}>
                    <button>Clear</button>
                </div>
            </div>

            <div className="container">
                <h2>Your text summary</h2>
                <h3>{text.split(" ").length} words and {text.length} characters</h3>
            </div>
        </div >

        </>
    );
}
