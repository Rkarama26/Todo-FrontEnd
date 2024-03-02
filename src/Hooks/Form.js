import React, {useState} from 'react'


export default function Form() {

     const [age, setAge] = useState(34);

  return (
    <div className='text-center'>
        <div className="name">
            <h2>Hello taylor you are {age} old </h2>
        </div>

        <div className="btn btn-primary" onClick={() =>setAge(age+1)}>
            Increment
        </div>
    </div>
  )
}
