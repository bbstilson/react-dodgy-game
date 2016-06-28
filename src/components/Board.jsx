import React from 'react';

const style = (dimension) => {
    const dim = dimension + 'px';
    return {
        width: dim,
        height: dim,
        border: '1px solid black',
        position: 'relative',
        margin: '25px auto',
        overflow: 'hidden'
    };
};

export default ({ dimension, children }) => (
    <div style={style(dimension)}>
        {children}
    </div>
)