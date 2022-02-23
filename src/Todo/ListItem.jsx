
import {Checkbox} from '@mui/material';
import { useState } from 'react';

const ListItem = ({itemData})=>{
    const [val, selectItem] = useState(false);
    const handleChange = ()=>{
        selectItem(true);
    }
    return (
        <>
         
            <div style={{textDecoration : val ? 'line-through' : 'none'}} className="item"><Checkbox onChange={handleChange} color="success" name={itemData} /> {itemData}</div>
        </>
    )
}

export default ListItem;