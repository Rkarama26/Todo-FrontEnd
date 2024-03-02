import React from 'react'

export default function Counter() {
  
    function increment() {
        console.log('increment clicked')
    }



    return (
        <div className='text-center' >

            <div className='container'>
                <span className='count'>0</span>
                <div>
                    <button className='counter-btn'>+1</button>
                </div>

            </div>
        </div>
    )
}
