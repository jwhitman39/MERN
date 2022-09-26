import React from 'react'
import { useState } from 'react'

const Person = (props) => {
    const [age, setAge] = useState(props.age);
    const handleAge = () => {
        setAge(age +1)
    }
    return (
        <>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={handleAge}>Birthday Button for {props.firstName} {props.lastName}</button>
        </>
    );
}

export default Person;