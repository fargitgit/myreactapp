import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import KeepForm from './KeepForm';
import InfoCard from './InfoCard';
import { useState } from "react";
import {colors} from './colors';

const GoogleKeep = () => {
    const [data, updateData] = useState([]);
    const updatethisData = (e) => {
        updateData((prevData)=>{
            return [...prevData , e];
        });
    }
    const delItem = (id)=>{
        updateData((oldData)=>
            oldData.filter((cd, i)=>{
                return i !== id;
            })
        )
    }
    return (
        <>
            <Header />
            <KeepForm onSelect={updatethisData}/>
            <div className="container infoContainer mt-4 d-flex flex-wrap">
                {
                    data?.map((e, i)=>{
                        return  <InfoCard bg={colors[Math.floor(Math.random() * colors.length)]} key={i} id={i} {...e} deleteItem={delItem} />
                    })
                }                
            </div>
        </>
    );
}

export default  GoogleKeep;