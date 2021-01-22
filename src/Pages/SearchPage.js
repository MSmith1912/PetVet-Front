import React, {Component} from 'react';
import UserSort from '../components/UserSort';
import AnimalSort from '../components/AnimalSort';

class SearchPage extends Component {
    render() {

        let sortTarget;
        if (this.props.target === 'animals') {
            sortTarget = <AnimalSort orderBy={this.props.orderBy} changeOrder={this.props.changeOrder} orderDir={this.props.orderDir}/>;
        } else {
            sortTarget = <UserSort orderBy={this.props.orderBy} changeOrder={this.props.changeOrder} orderDir={this.props.orderDir}/>;
        }

        let searchTitle;
        if (this.props.target === 'animals') {
            searchTitle = "Animal";
        } else {
            searchTitle = "User";
        }

        return (
            <div className="search">
                <div>
                    <div>
                        <h1>{searchTitle} Search</h1>
                        

                        <span>Search:</span>
                        <input 
                            id="search"
                            type="text"
                            aria-label="search users"
                            placeholder="search by name, group, class, species etc."
                            onChange={e => this.props.search(e.target.value)}
                        />
                        <div>
                            <h1>{searchTitle} Sort</h1>
                            <span>Sort By:</span>
                            {sortTarget}
                            {/* <button
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Sort by: <span className="caret" />
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
       
}

export default SearchPage;