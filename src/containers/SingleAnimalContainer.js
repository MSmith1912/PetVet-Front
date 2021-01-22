import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SingleAnimalPage from '../Pages/SingleAnimalPage';
import { selectAnimalById } from '../Redux/selector';
import { getSingleAnimal, deleteAnimalByIdRequest } from "../Redux/thunk";

const SingleAnimalContainer = ({ getAnimalById, individualAnimal, deleteAnimalById }) => {

    const { animalId } = useParams();

    useEffect(() => {
        getAnimalById(animalId);
    },[]);

    if(!individualAnimal) {
        return <div>Animal with ID:{animalId} not found</div>;
    }

    return (
        <SingleAnimalPage 
            individualAnimal={individualAnimal}
            deleteAnimalById={deleteAnimalById} />
    )

}

const mapStateToProps = (state) => ({
    individualAnimal: selectAnimalById(state),
});

const mapDispacthToProps = dispatch => ({
    getAnimalById: id => dispatch(getSingleAnimal(id)),
    deleteAnimalById: id => dispatch(deleteAnimalByIdRequest(id))
});

export default connect(mapStateToProps, mapDispacthToProps)(SingleAnimalContainer);