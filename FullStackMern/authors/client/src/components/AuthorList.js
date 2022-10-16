import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AuthorList = (props) => {
    // const {author, setAuthor} = props
    const [list, setList ] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:8000/api/allAuthors')
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
            <h1>Author List</h1>
            <div className="d-flex flex-wrap">              
                {
                    list.map((author)=> (
                        <div className="col col-4 mt-3">
                            <Link to={`/oneAuthor/${author._id}`}>{author.firstName}</Link>
                            <p>{author.lastName}</p>
                            <p>{author.knownFor}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default AuthorList;