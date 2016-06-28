import React from 'react';

const style = ({ size, position, color }) => {
    const dim = size + 'px';
    return {
        width: dim,
        height: dim,
        backgroundColor: color,
        position: 'absolute',
        top: position.top + 'px',
        left: position.left + 'px',
        transition: 'all 0.1s ease'
    };
};

export default (props) => <div style={style(props)}/>