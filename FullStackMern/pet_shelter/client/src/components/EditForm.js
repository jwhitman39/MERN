import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const EditForm = () => {
    const [ name, setName ] = useState('')
    const [ type, setType ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ skillOne, setSkillOne ] = useState('')
    const [ skillTwo, setSkillTwo ] = useState('')
    const [ skillThree, setSkillThree ] = useState('')
    const [ errors, setErrors ] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/onePet/${id}`)
        .then((res)=>{
            setName(res.data.name)
            setType(res.data.type)
            setDescription(res.data.description)
            setSkillOne(res.data.skillOne)
            setSkillTwo(res.data.skillTwo)
            setSkillThree(res.data.skillThree)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    const updateHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/updatePet/${id}`, {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        }).then((res)=>{
            navigate('/petList')
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }
    return (
        <form onSubmit={updateHandler}>
            <p>
                <label className='form-label'>First Name:</label>
                <input value={name} className='form-control' type="text" onChange= {(e) => setName(e.target.value)}/>
                { errors.name ? <span className='text-danger'>{errors.name.message}</span> :null }
            </p>
            <p>
                <label className='form-label'>Last Name:</label>
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
                <label className='form-label'>Skill 3:</label>
                <input value={skillThree} className='form-control' type="text" onChange= {(e) => setSkillThree(e.target.value)}/>
                { errors.skillThree ? <span className='text-danger'>{errors.skillThree.message}</span> :null }
            </p>
            <input value="Update Pet" type="submit" className='btn btn-warning' />
        </form>
    )
}

export default EditForm;