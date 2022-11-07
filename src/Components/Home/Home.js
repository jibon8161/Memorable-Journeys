import React, { useContext } from 'react';
import  { InfoContext } from '../AuthContext/AuthContext';

const Home = () => {

    const { user } = useContext(InfoContext)

    return (
        <div>
            <h1>home</h1>
            <h1>{user?.displayName}</h1>
            
        </div>
    );
};

export default Home;