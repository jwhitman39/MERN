import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const EditForm = () => {
    const [ title, setTitle ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ description, setDescription ] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
        .then((res)=>{
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    const updateHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/updateProduct/${id}`, {
            title,
            price,
            description
        }).then((res)=>{
            navigate('/productList')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <form onSubmit={updateHandler}>
            <p>
                <label className='form-label'>Title:</label>
                <input value={title} className='form-control' type="text" onChange= {(e) => setTitle(e.target.value)}/>
            </p>
            <p>
                <label className='form-label'>Price:</label>
                <input value={price} className='form-control' type="number" onChange= {(e) => setPrice(e.target.value)}/>
            </p>
            <p>
                <label className='form-label'>Description:</label>
                <input value={description} className='form-control' type="text" onChange= {(e) => setDescription(e.target.value)}/>
            </p>
            <input value="Update Product" type="submit" className='btn btn-warning' />
        </form>
    )
}

export default EditForm;