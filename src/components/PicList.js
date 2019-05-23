import React from 'react';
import Pic from './Pic';
import './PicList.css';

const PicList = (props) => {
    const pics = props.pics.map(pic => (
        <Pic
            key={pic.picId}
            thumb={pic.thumb}
            link={pic.link}
        />
    ))
    return (
        <div className="container__pics">
            <p className="pics__title">{props.name}</p>
            {pics}
        </div>
    );
}

export default PicList;