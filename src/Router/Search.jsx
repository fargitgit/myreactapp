
import React, { useState } from "react";
import Result from './Result';
const Search = () =>{

    const [img, setImg] = useState('');
    const chgVal = (e) => {
        setImg(e.target.value);
    }
    return (
        <>
            <div style={{textAlign: 'center', marginTop: '10px'}}>
                <h4>Search here</h4>
                <input type="text"  placeholder="Search here..." value={img} onChange={chgVal} />
            </div>
            {img  ? <Result image={img} /> : ''}
        </>
    );
}

export default Search;