import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAnimalOrderBy } from '../Redux/thunk';
import { setUserOrderBy } from "../Redux/thunk";

const NavBar = ({ setOrderForUser, setOrderForAnimal}) => (
    <header className="header">
        <div>
            <nav id="nav">
                <div className="navbar">
                    <div className="brand"><a><span>Pet Vet</span></a></div>
                    <ul>
                        <li>
                            <Link to="/"><a className="icon home"><span>Home</span></a></Link>
                        </li>
                        <li onClick={() => setOrderForUser()}>
                            <Link to="/users"><a className="icon users"><span>Users</span></a></Link>
                        </li>
                        <li onClick={() => setOrderForAnimal()}>
                            <Link to="/animals"><a className="icon animals"><span>Animals</span></a></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    
)

const mapStateToProps = state => ({

});

const mapDispacthToProps = dispatch => ({
    setOrderForUser: () => dispatch(setUserOrderBy()),
    setOrderForAnimal: () => dispatch(setAnimalOrderBy()),
});

export default connect(mapStateToProps, mapDispacthToProps)(NavBar);