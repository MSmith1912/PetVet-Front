import React, {Component}from 'react';

const UserSort = ({orderBy, changeOrder, orderDir }) => {
    return (
        <div className="userSort">
            <button className={'sort-by dropdown-item ' +
              (orderBy === 'username' ? 'active' : '')}
                onClick={e => changeOrder('username', orderDir)}
                href="#">
                    UserName
                </button>
            <button className={'sort-by dropdown-item ' +
                (orderBy === 'DOB' ? 'active' : '')}
                onClick={e => changeOrder('DOB', orderDir)}
                href="#">
                    DOB
                </button>
            <button className={'sort-by dropdown-item ' +
                (orderBy === 'firstName' ? 'active' : '')}
                onClick={e => changeOrder('firstName', orderDir)}
                href="#">
                    First Name
                </button>
            <button className={'sort-by dropdown-item ' +
                (orderBy === 'lastName' ? 'active' : '')}
                onClick={e => changeOrder('lastName', orderDir)}
                href="#">
                    Last Name
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

export default UserSort;