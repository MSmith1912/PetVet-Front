import React, { useEffect } from 'react';

const AnimalDetails = ({ individualAnimal }) => {

    if(!individualAnimal) return <div>No animal</div>

    return (
        <>
            <div className="details">
                <h3>Animal ID: {individualAnimal.animalId}</h3>
                <p>Animal DOB: {individualAnimal.dob}</p>
                <p>Animal Weight: {individualAnimal.weight}</p>
                <p>Animal Group: {individualAnimal.group}</p>
                <p>Animal Classification: {individualAnimal.classification}</p>
                <p>Animal Family: {individualAnimal.family}</p>
                <p>Animal Species: {individualAnimal.species}</p>
                <p>Animal Description: {individualAnimal.description}</p>
            </div>
        </>
    )
}

export default AnimalDetails;