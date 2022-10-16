import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const PetForm = (props) => {
    const {pet, setPet} = props;
    const [ name, setName ] = useState('')
    const [ type, setType ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ skillOne, setSkillOne ] = useState('')
    const [ skillTwo, setSkillTwo ] = useState('')
    const [ skillThree, setSkillThree ] = useState('')
    const [ errors, setErrors ] = useState({})
    const navigate = useNavigate()
    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addPet',
        {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        })
        .then((res)=>{
            console.log(res); 
            navigate('/petList')
            setPet([...pet, res.data]);
        })
        .catch(err=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }
    return (
        <form className='col-6 mx-auto' onSubmit = {onSubmitHandler}>
            <p>
                <label className='form-label'>Name:</label>
                <input value={name} className='form-control' type="text" onChange= {(e) => setName(e.target.value)}/>
                { errors.name ? <span className='text-danger'>{errors.name.message}</span> :null }
            </p>
            <p>
                <label className='form-label'>Type:</label>
                <input value={type} className='form-control' type="text" onChange= {(e) => setType(e.target.value)}/>
                { errors.type ? <span className='text-danger'>{errors.type.message}</span> :null }
            </p>
            <p>
                <label className='form-label'>Description:</label>
                <input value={description} className='form-control' type="text" onChange= {(e) => setDescription(e.target.value)}/>
                { errors.description ? <span className='text-danger'>{errors.description.message}</span> :null }
            </p>
            <p>Skills (optional)</p>
            <p>
                <label className='form-label'>Skill 1:</label>
                <input value={skillOne} className='form-control' type="text" onChange= {(e) => setSkillOne(e.target.value)}/>
                { errors.skillOne ? <span className='text-danger'>{errors.skillOne.message}</span> :null }
            </p>
            <p>
                <label className='form-label'>Skill 2:</label>
                <input value={skillTwo} className='form-control' type="text" onChange= {(e) => setSkillTwo(e.target.value)}/>
                { errors.skillTwo ? <span className='text-danger'>{errors.skillTwo.message}</span> :null }
            </p>
            <p>
                <label className='form-label'>Skill 1:</label>
                <input value={skillThree} className='form-control' type="text" onChange= {(e) => setSkillThree(e.target.value)}/>
                { errors.skillThree ? <span className='text-danger'>{errors.skillThree.message}</span> :null }
            </p>
            <input type="submit" className='btn btn-success'></input>
        </form>
    )
}
export default PetForm;