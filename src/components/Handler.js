import React from 'react'
import Mybutton from './Mybutton'

export default function Handler() {
    function handleClick(){
    alert('handler button clicked')
    }
  return (
<div>
    <div>this is handler</div>
     <button onClick={handleClick}>
        handler-button
     </button>
</div>
  )
}
