import React from 'react'

export default function Mybutton(props) {
    /*  function handleClick(){
      alert('you click on btn')
     } */

    return (
        <div>
            <button className="btn btn-primary text-white">
                {props.name}
            </button>
        </div>
    );
}
