import React, {Component, useEffect}from 'react';

const AnimalSort = ({ orderBy, changeOrder, orderDir }) => {
    return (
    <div className="sort-menu dropdown-menu dropdown-menu-right">
        <button className={'sort-by dropdown-item ' +
            (orderBy === 'name' ? 'active' : '')}
            onClick={e => changeOrder('name', orderDir)}
            href="#">
                Pet Name
            </button>
        <button className={'sort-by dropdown-item ' +
            (orderBy === 'classification' ? 'active' : '')}
            onClick={e => changeOrder('classification', orderDir)}
            href="#">
                Pet Classification
            </button>
        <button className={'sort-by dropdown-item ' +
            (orderBy === 'weight' ? 'active' : '')}
            onClick={e => changeOrder('weight', orderDir)}
            href="#">
                Pet Weight
            </button>
        <button className={'sort-by dropdown-item ' +
            (orderBy === 'dob' ? 'active' : '')}
            onClick={e => changeOrder('dob', orderDir)}
            href="#">
                Pet Date of Birth
            </button>
        <button className={'sort-by dropdown-item ' +
            (orderDir === 'asc' ? 'active' : '')}
            onClick={e => changeOrder(orderBy, 'asc')}
            href="#">
                Asc
            </button>
        <button className={'sort-by dropdown-item ' +
            (orderDir === 'desc' ? 'active' : '')}
            onClick={e => changeOrder(orderBy, 'desc')}
            href="#">
                Desc
            </button>
    </div>
    )
}

export default AnimalSort;