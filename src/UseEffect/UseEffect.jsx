import { useEffect, useState } from "react";

const UseEffect = () =>{

    const [val, updateVal] = useState(0);
    const [vals, updateVals] = useState(0);

    useEffect(()=>{
        document.title = `You clicked me ${val} times`;
    }, [val]);

    return (
        <>
            <button style={{margin : '20px', padding: '15px 20px'}} onClick={()=>{
                updateVal(val+1);
            }}>
               Click {val} times
            </button>
            <button style={{margin : '20px', padding: '15px 20px'}} onClick={()=>{
                updateVals(vals+1);
            }}>
               Click {vals} times
            </button>
        </>
    )
}
export default UseEffect;