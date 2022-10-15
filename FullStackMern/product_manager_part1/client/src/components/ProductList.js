import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ProductList = (props) => {
    // const {product, setProduct} = props
    const [list, setList ] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:8000/api/allProducts')
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
            <h1>Product List</h1>
            <div className="d-flex flex-wrap">              
                {
                    list.map((product)=> (
                        <div className="col col-4 mt-3">
                            <Link to={`/oneProduct/${product._id}`}>{product.title}</Link>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ProductList;