import React from 'react';
import withData from '../../with-data.js';



const UserProfile = ({ name, email, data }) => {
    return (
        <div className='container'>
            <h1>Name: {name}</h1>
            <h1>Email: {email}</h1>
                posts:
            {
                data.map(item =>
                    <div className='post' key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </div>)
            }
        </div>
    );
};

export default withData(UserProfile);