 /* eslint-disable no-unused-vars */

// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

import React, { useContext } from 'react';
import ComponentC from './ComponentC.jsx';

function ComponentB() {
    return (
        <div className="box-component">
            <h1>Component B</h1>
            <ComponentC />
        </div>
    );
}

export default ComponentB;