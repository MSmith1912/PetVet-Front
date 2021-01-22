import React from 'react';
import AnimalDetails from '../components/AnimalDetails';
import { FaTimes } from 'react-icons/fa';

const SingleAnimalPage = ({ individualAnimal, deleteAnimalById }) => {
    console.log(individualAnimal);
    if(!individualAnimal) return <div>no animals!</div>;

    return (
        <>
            <div className="single">
                <h1>Individual Animal</h1>
                <AnimalDetails key={individualAnimal.animalId} individualAnimal={individualAnimal}/>
                <button onClick={() => deleteAnimalById(individualAnimal.animalId)}>
                    <FaTimes /> Delete Animal
                </button>
            </div>    
        </>
    )
}

export default SingleAnimalPage;