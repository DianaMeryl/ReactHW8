/* eslint-disable react/display-name */
import React from 'react';

const ChildMemo = React.memo(({ prop1, prop2 }) => {
    return (
        <div>
        <p>Prop 1: {prop1}</p>
        <p>Prop 2: {prop2}</p>
        </div>
    );
    },
    (prevProps, nextProps) => {
    return prevProps.prop1 === nextProps.prop1;
    });
    
export default ChildMemo