import React from 'react';

function MutilSingleChoice({onSelect}){
    return (
        <div>
            <button onClick={() => {onSelect('m')}}>복수</button>
            <button onClick={() => {onSelect("s")}}>단말</button>
          </div>
    );
};

export default MutilSingleChoice;