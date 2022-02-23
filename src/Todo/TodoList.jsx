import { useState } from "react";
import {Card, Container, Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ListItem from './ListItem';

const TodoList = ()=>{

    const [item, updateItem] = useState('');
    const [items, AddItem] = useState([]);

    const chgVal = (e)=>{
        updateItem(e.target.value);
    }
    const addValue = ()=>{
        let arr = [...items, item];
        if(item != ''){
            AddItem(arr);
            updateItem('');
        }
    }
    return(
        <>
            <Container maxWidth="sm">
                <Card style={{minHeight: '200px'}} variant="outlined">
                    <h2 className="header" align="center">ToDo List</h2>
                    <div style={{ display: 'flex', height: '100%' , justifyContent: 'center'}}>
                    <input onChange={chgVal} className='itemInput' type="text" placeholder='' value={item} />
                    <Fab onClick={addValue} color="secondary" aria-label="add">
                        <AddIcon />
                    </Fab>
                    </div>
                    <div className="listItems">
                        {items.map((e, i)=>{
                            return <ListItem itemData={e} key={i} />
                        })}
                    </div>
                </Card>
            </Container>
        </>
    );
}

export default TodoList;
