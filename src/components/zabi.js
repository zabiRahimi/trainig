import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import useType from './uses/useType.js';
import '../css/TypeSpellTranslate.css';
const words = [
    'zabi', 'dar', 'otagh', 'tanha', 'bood'
];


const Zabi = () => {
    const { contextShow, handleWord, message } = useType(words);

    return (
        <div>
            <div>{contextShow}</div>
            <span className='errorChar' id='errorChar'></span>


            <div>{(message) ? message : 'not'}</div>
            {/* <div className='containerChar'>
                <span className='errorChar' id='errorChar'></span>
                <span className="chars">{contextShow}</span>
            </div> */}

            <br /><br />
            <input type="text" id='inputChar' className='inputChar' onInput={handleWord} />

        </div>
    )
}

export default Zabi;