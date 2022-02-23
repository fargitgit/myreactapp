import { useState } from 'react';
import AccordianList from './AccordianList';
import {Api} from '../Accordian/FaqsApi';

const Accordian = ()=>{
    const [apiData, updateData] = useState(Api);
    return (
        <>
        <div className="accordion" id="accordionExample">
            {
               apiData.map((data)=>{
                   return  <AccordianList key={data.id} {...data} />
               }) 
            }
         </div>
        </>
    );
}

export default Accordian;