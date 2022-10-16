import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const PetList = (props) => {
    // const {pet, setPet} = props
    const [list, setList ] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:8000/api/allPets')
        .then((res)=>{
            console.log(res);
            setList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    return (
        <div>
            <h1>Pet List</h1>
            <div className="d-flex flex-wrap">              
                {
                    list.map((pet)=> (
                        <div className="col col-4 mt-3">
                            <Link to={`/onePet/${pet._id}`}>{pet.name}</Link>
                            <p>{pet.type}</p>
                            <p>{pet.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default PetList;