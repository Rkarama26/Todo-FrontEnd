import React, { useState } from 'react'

export default function Counter() {
    const [set, Reset] = useState(0);

    return (


        <div className='text-center' >

            <div className='container'>
                <span className='count' >{set}</span>
                <div>
                    <button className='btn btn-dark' onClick={() => Reset(set + 1)}>+1</button>
                    <button className='btn btn-dark' onClick={() => Reset(set - 1)}>-1</button>
                    <button className='btn btn-dark' onClick={() => Reset(0)}>0</button>
                </div>
            </div>
            <h1>----------------------------</h1>

        </div>


    );

}