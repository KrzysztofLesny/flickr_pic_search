import React from 'react';
import Pic from './Pic';
import NoPic from './NoPic';
import './PicList.css';

const PicList = (props) => {
    const hasPics = props.pics.length > 0 ? true : false;
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
            <div>{hasPics ? pics : <NoPic deleteCollection={props.delete} id={props.id} />}</div>
            {hasPics && <button onClick={() => props.delete(props.id)} className="pics__delete">X</button>}
        </div >
    );
}

export default PicList;