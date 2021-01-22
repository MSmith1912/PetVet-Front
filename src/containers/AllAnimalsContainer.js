import React, { useEffect }from 'react';
import { connect } from "react-redux";
import { selectAllAnimals , selectOrderBy, selectOrderDir, selectQueryText } from '../Redux/selector'
import { loadAllAnimals, changeOrder, searchFor, setAnimalOrderBy } from '../Redux/thunk';
import ListAnimalPage from '../Pages/ListAnimalPage';
import CreateAnimalContainer from './CreateAnimalContainer';
import  toggleForm from '../App'
import formDisplay from '../App'
import SearchPage from '../Pages/SearchPage';

const AllAnimalsContainer = ({ retrieveAllAnimals, setOrderForAnimal, animals, orderBy, orderDir, orderChanged, search, queryText }) => {
    
    useEffect(() => {
        retrieveAllAnimals();
        setOrderForAnimal();
    }, []);

    const target = 'animals';

    let order;
    let filteredAnimals = animals;
    if(orderDir === 'asc') {
        order = 1;
    } else {
        order = -1;
    }

    filteredAnimals = filteredAnimals.sort((a, b) => {
        if(a[orderBy].toLowerCase() < 
            b[orderBy].toLowerCase()
        ) {
            return -1 * order;
        } else {
            return 1 * order;
        }
    }).filter(eachItem => {
        return (
            eachItem['name']
            .toLowerCase()
            .includes(queryText.toLowerCase()) ||
            eachItem['group']
            .toLowerCase()
            .includes(queryText.toLowerCase()) ||
            eachItem['classification']
            .toLowerCase()
            .includes(queryText.toLowerCase()) ||
            eachItem['dob']
            .toLowerCase()
            .includes(queryText.toLowerCase())
        )
    });

    return (
        <>
            <div id="container">
                <SearchPage 
                    orderBy={orderBy}
                    orderDir={orderDir}
                    changeOrder={orderChanged}
                    search={search}
                    target={target}/>
                <CreateAnimalContainer toggleForm={toggleForm} formDisplay={formDisplay} />
                <ListAnimalPage animalList={filteredAnimals}/>
            </div>
        </>
    )
};

const mapStateToProps= state => ({
    animals: selectAllAnimals(state),
    orderBy: selectOrderBy(state),
    orderDir: selectOrderDir(state),
    queryText: selectQueryText(state)
});

const mapDispacthToProps = dispatch => ({
    retrieveAllAnimals: () => dispatch(loadAllAnimals()),
    setOrderForAnimal: () => dispatch(setAnimalOrderBy()),
    orderChanged: (order, direction) => dispatch(changeOrder(order, direction)),
    search: (queryText) => dispatch(searchFor(queryText))
});

export default connect(mapStateToProps, mapDispacthToProps)(AllAnimalsContainer);