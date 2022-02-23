
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const IncreDecre = ()=>{
    const [initialVal, updatedVal] = useState(0);
    const ChnageVal = (e)=>{
        let val = initialVal;
        if(e == 'add'){
            updatedVal(val + 1);
        } else if(e == 'sub' && initialVal > 0) {
            updatedVal(val - 1);
        } else {
            alert('zero limit exceed!')
        }
    }
    return(
        <>
            <div className="addValues bg">
                <h2>{initialVal}</h2>
                <button onClick={()=>ChnageVal('add')}> <AddIcon /> </button>
                <button onClick={()=>ChnageVal('sub')}> <RemoveIcon /> </button>
            </div>
        </>
    )
}

export  default IncreDecre;