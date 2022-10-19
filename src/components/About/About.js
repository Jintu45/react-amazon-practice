import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';



const About = () => {
   const {user} = useContext(AuthContext)
    return (
        <div>
            <h2>this is section of about us !!!</h2>
            <h3>hello {user?.email}</h3>
        </div>
    );
};

export default About;