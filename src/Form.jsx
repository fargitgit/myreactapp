import { useState } from "react";

const Form =  ()=>{
    const [userInfo , updatedVal] = useState({
        fname : '',
        email: '',
        mobile: ''
    });
   
    const ChgVal = (e)=>{
        const value =  e.target.value;
        const name =  e.target.name;
        updatedVal((prevVal)=>{
            return {...prevVal,[name]:value}
        });
    }
   const getInfo = (e)=>{
        e.preventDefault();
        alert('submitted succesfully!');
   }
    return (
        <>
            <form className="bg">
                <div style={{textAlign: 'left', paddingLeft: '30px', fontSize: '16px'}}>
                    <h5>{`Name : ${userInfo.fname}`}</h5>
                    <br/>
                    <h5>{`Email : ${userInfo.email}`}</h5>
                    <br/>
                    <h5>{`Mobile : ${userInfo.mobile}`}</h5>
                    <br/>
                </div>
                <input type="text" name="fname" onChange={ChgVal} placeholder="Enter your name..." value={userInfo.fname}/>
                <input type="email" name="email" onChange={ChgVal} placeholder="Enter email..." value={userInfo.email}/>
                <input type="number" name="mobile" onChange={ChgVal} placeholder="Enter number..." value={userInfo.mobile}/>
                <button onClick={getInfo}>Click</button>
            </form>
        </>
    );
}
export default Form;