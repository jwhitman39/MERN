import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const OneAuthor = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [author, setAuthor] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneAuthor/${id}`)
        .then((res)=>{
            setAuthor(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteAuthor/${id}`)
        .then((res)=>{
            console.log('Deleted from db')
            navigate('/authorList')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div>
            <h1>One Author</h1>
            <p>First Name: {author.firstName}</p>
            <p>Last Name: {author.lastName}</p>
            <p>Known For: {author.knownFor}</p>
            <button className='btn btn-warning'><Link to={`/edit/${author._id}`}>Edit Author</Link></button>
            <button onClick={(e)=>deleteHandler(author._id)} className='btn btn-danger'>Delete Author</button>
        </div>
    )
}

export default OneAuthor