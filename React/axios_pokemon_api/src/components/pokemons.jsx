import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'

const Pokemon = props => {
    const [pokemon, setPokemon] = useState(null);
    useEffect(() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response =>{setPokemon(response.data)})
            console.log('Hello')
    }, []);

    return (
        <div>
            {pokemon}
        </div>
    )
}
export default Pokemon