
import React from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
const User = () =>{
    const {fname, lname}  = useParams();
    const loc = useLocation();
    const his = useNavigate();
    console.log(his);
    return (
        <>
            <h2>User {fname} {lname} page..</h2>
            <p>Your current  location is = {loc.pathname} </p>
            <button onClick={()=>{
                his('/');
            }}>Go Back..</button>
        </>
    )
}
export default User;