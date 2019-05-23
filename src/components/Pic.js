import React from 'react';

const Pic = (props) => {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img src={props.thumb} alt="" className="pics__picture" />
        </a>

    );
}

export default Pic;