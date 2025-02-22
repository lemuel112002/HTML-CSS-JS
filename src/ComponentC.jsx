/* eslint-disable no-unused-vars */

// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

import React, { useContext } from 'react';
import ComponentD from './ComponentD.jsx';
import { UserContext } from './ComponentA.jsx';

function ComponentC() {
    const user = useContext(UserContext);
    
    return (
        <div className="box-component">
            <h1>Component C</h1>
        <h2>{`Hello again ${user}`}</h2>
            <ComponentD />
        </div>
    );
}

export default ComponentC;