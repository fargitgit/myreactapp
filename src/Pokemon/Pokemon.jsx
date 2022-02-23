
import {useState, useEffect} from 'react';
import axios from 'axios';

const Pokemon  = () =>{
    const [num, setNum] = useState();
    const [bio, setBio] = useState({
        name : '',
        moves: '',
        img: ''
    })

    useEffect(()=>{
       const getData = async() =>{
            const res  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setBio(
                {
                    name : res.data.name,
                    moves: res.data.moves.length,
                    img: res.data.sprites.front_default
                }
            )
            // setName(res.data.name);
            // setMoves(res.data.moves.length);
            // setImg(res.data.sprites.front_default);
        }
        getData();
    })
    
    return (
        <>
            <div style={{margin: '20px'}}>
                <h1>I am {bio.name}</h1>
                <h1>I  have {bio.moves} Moves...</h1>
                <img src={bio.img}  />
                <div>
                    <select value={num} onChange={(e)=>{
                        setNum(e.target.value);
                    }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div>
            </div>
        </>
    );
}
export default Pokemon;