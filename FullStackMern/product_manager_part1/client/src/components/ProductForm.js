import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ProductForm = (props) => {
    const {product, setProduct} = props;
    const [ title, setTitle ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ description, setDescription ] = useState('')
    const navigate = useNavigate()
    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addProduct',
        {
            title,
            price,
            description
        })
        .then((res)=>{
            console.log(res); 
            navigate('/productList')
            setProduct([...product, res.data]);
        })
        .catch(err=>console.log(err))
    }
    return (
        <form className='col-6 mx-auto' onSubmit = {onSubmitHandler}>
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
            <input type="submit" className='btn btn-info'></input>
        </form>
    )
}
export default ProductForm;