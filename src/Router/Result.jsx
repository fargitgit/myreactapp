import React from 'react';

const Result = ({image}) => {
    const img = `https://source.unsplash.com/300x300/?${image}`;
    return (
        <>
            <div style={{textAlign: 'center'}}>
                <img src={img} />
            </div>
        </>
    )
}
export default Result;