import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const EditForm = () => {
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ knownFor, setKnownFor ] = useState('')
    const [ errors, setErrors ] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/oneAuthor/${id}`)
        .then((res)=>{
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
            setKnownFor(res.data.knownFor)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    const updateHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/updateAuthor/${id}`, {
            firstName,
            lastName,
            knownFor
        }).then((res)=>{
            navigate('/authorList')
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }
    return (
        <form onSubmit={updateHandler}>
            <p>
                <label className='form-label'>First Name:</label>
                <input value={firstName} className='form-control' type="text" onChange= {(e) => setFirstName(e.target.value)}/>
                { errors.firstName ? <span className='text-danger'>{errors.firstName.message}</span> :null }
            </p>
            <p>
                <label className='form-label'>Last Name:</label>
                <input value={lastName} className='form-control' type="text" onChange= {(e) => setLastName(e.target.value)}/>
                { errors.lastName ? <span className='text-danger'>{errors.lastName.message}</span> :null }
            </p>
            <p>
                <label className='form-label'>KnownFor:</label>
                <input value={knownFor} className='form-control' type="text" onChange= {(e) => setKnownFor(e.target.value)}/>
                { errors.knownFor ? <span className='text-danger'>{errors.knownFor.message}</span> :null }
            </p>
            <input value="Update Author" type="submit" className='btn btn-warning' />
        </form>
    )
}

export default EditForm;