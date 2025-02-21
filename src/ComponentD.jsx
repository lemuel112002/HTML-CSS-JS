/* eslint-disable no-unused-vars */

// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

import React, { useContext } from 'react';
import { UserContext } from './ComponentA.jsx';

function ComponentD() {
    const user = useContext(UserContext);

    return (
        <div className="box-component">
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    );
}

export default ComponentD;