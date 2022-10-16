import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AuthorForm = (props) => {
    const {author, setAuthor} = props;
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ knownFor, setKnownFor ] = useState('')
    const [ errors, setErrors ] = useState({})
    const navigate = useNavigate()
    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addAuthor',
        {
            firstName,
            lastName,
            knownFor
        })
        .then((res)=>{
            console.log(res); 
            navigate('/authorList')
            setAuthor([...author, res.data]);
        })
        .catch(err=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }
    return (
        <form className='col-6 mx-auto' onSubmit = {onSubmitHandler}>
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
                <label className='form-label'>Known For:</label>
                <input value={knownFor} className='form-control' type="text" onChange= {(e) => setKnownFor(e.target.value)}/>
                { errors.knownFor ? <span className='text-danger'>{errors.knownFor.message}</span> :null }
            </p>
            <input type="submit" className='btn btn-info'></input>
        </form>
    )
}
export default AuthorForm;