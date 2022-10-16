import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const OnePet = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [pet, setPet] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/onePet/${id}`)
        .then((res)=>{
            setPet(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deletePet/${id}`)
        .then((res)=>{
            console.log('Deleted from db')
            navigate('/petList')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div>
            <h1>Details About: {pet.name} </h1>
            <p>Name: {pet.name}</p>
            <p>Type: {pet.type}</p>
            <p>Description: {pet.description}</p>
            <p>Skill 1: {pet.skillOne}</p>
            <p>Skill 2: {pet.skillTwo}</p>
            <p>Skill 3: {pet.skillThree}</p>
            <button className='btn btn-warning'><Link to={`/edit/${pet._id}`}>Edit Pet</Link></button>
            <button onClick={(e)=>deleteHandler(pet._id)} className='btn btn-danger'>Adopt This Pet!</button>
        </div>
    )
}

export default OnePet