import {Api} from './FaqsApi';
import Accordians from './Accordians';
import { useState } from 'react';
import { AppRegistrationSharp } from '@mui/icons-material';

const Accordian = () => {
    const [data, setData] = useState(Api);
    return (
        <>
            {
                data.map((val)=>{
                   return <Accordians key={val.id} {...val} />
                })
            }
        </>
    )
}

export default Accordian;