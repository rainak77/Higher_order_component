import React from 'react';

import withData from '../../with-data.js';


const UserList = ({ data }) => {
    return (
        <div className='container user-list'>
            <h1>users List</h1>
            {
                data.map(item =>
                    <div className='post' key={item.id}>
                        <h1>{item.name}</h1>
                        <h2>{item.email}</h2>
                    </div>
                )}
        </div>
    );
};

export default withData(UserList);