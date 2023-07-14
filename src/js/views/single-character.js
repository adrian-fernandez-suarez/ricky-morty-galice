import React, { useState, useEffect} from "react";
import { useParams } from "react-router";

export default function SingleCharacter(){
    const { id } = useParams();

    const [character, setCharacter] = useState({
        name:'',
        gender: '',
        species: '',
        status: '',
        image: '',
        id: null,
    });

    const fetchCharacter = () => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`).
        then(response => response.json()).
        then(data => {
            setCharacter( data )
        }).
        catch(error => console.log(error))
        console.log(character);
    };
    
    useEffect(() => {
        fetchCharacter();
    },[]);

    return (
        <div style={{
            width:'18rem',
        }} className="card">
            <img src={character.image} alt={character.name} />
            <div className="card-info">
                <h5 className="card-title">{character.name}</h5>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
            </div>
        </div>
    );
}