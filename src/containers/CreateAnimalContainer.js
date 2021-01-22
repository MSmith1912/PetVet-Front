import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CreateAnimal } from '../Pages/CreateAnimal';

const CreateAnimalContainer = ({onCreateAnimalPressed, toggleForm, formDisplay }) => {

    const [ open, setOpen ] = useState(false);

    return (
        <>
            <button onClick={() => {
                setOpen(!open);
            }}>Add Animal</button>

            {open === true ? (
                <CreateAnimal onCreateAnimalPressed={onCreateAnimalPressed} />
            ) : (
                <div>Would you like to add an animal?</div>
            )}
        </>
    )
}

const mapStateToProps = state => ({

});

const mapDispacthToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispacthToProps)(CreateAnimalContainer);