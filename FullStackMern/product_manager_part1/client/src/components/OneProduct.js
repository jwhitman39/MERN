import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const OneProduct = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
        .then((res)=>{
            setProduct(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
        .then((res)=>{
            console.log('Deleted from db')
            navigate('/productList')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div>
            <h1>One Product</h1>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button className='btn btn-warning'><Link to={`/edit/${product._id}`}>Edit Product</Link></button>
            <button onClick={(e)=>deleteHandler(product._id)} className='btn btn-danger'>Delete Product</button>
        </div>
    )
}

export default OneProduct