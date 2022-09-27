import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'

const Pokemon = props => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() =>{
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then((response) =>{
                setPokemon(response.data.results)
                console.log('API ingested')
            })
            .catch((err) => console.log(err))
        }, []);
        return (
            <div>
                <ul>
                    {pokemon.map((pokemon, index) => (
                        <li key={index}>{pokemon.name}</li>
                    ))}
                </ul>
            </div>
        )
}
export default Pokemon