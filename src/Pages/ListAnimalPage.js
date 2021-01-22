import React from 'react';
import { Link } from 'react-router-dom';
import AnimalDetails from '../components/AnimalDetails';

const ListAnimalPage = ({ animalList }) => {

    if(!animalList) return <div>no animals!</div>;
    
    return (
    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-6 mx-auto">
                    <h1>Animal List</h1>
                    {animalList.map((animal) => (
                    <>
                        <Link key={animal.animalId} to={`/animal/${animal.animalId}`}>
                            <h3>Animal Name: {animal.name}</h3>
                        </Link>
                            {/* <AnimalDetails individualAnimal={animal} /> */}
                            {/* <p>{animal.group}</p>
                            <p>{animal.classification}</p>
                            <p>{animal.family}</p>
                            <p>{animal.species}</p> */}
                    </>
                    ))}
                </div>
            </div>
        </div>
    </>)
}

export default ListAnimalPage;