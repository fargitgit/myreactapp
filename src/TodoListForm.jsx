import { useState } from "react";
import TodoItemList from './TodoItemList';

const TodoListForm = ()=>{
    let arr = [];
    const [items, addItems] = useState('');
    const [addItem, updateItem] = useState([]);
    const addIputItem = (event)=>{
        addItems(event.target.value);
    }
    const addItemBtn = ()=>{
        if(items != '') {
            arr = [...addItem, items];
            updateItem(arr);
            addItems('');
        }
    }
    const deleteItem = (i)=>{
        updateItem((prev)=>{
            return prev.filter((e, index)=>{
                return index !== i;
            })
        });
    }   

    return (
        <>
            <div className="todolist_form"> 
                <input onChange={addIputItem} type="text" placeholder="Add Item.." value={items} />
                <button onClick={addItemBtn} className="todo_btn">&#x2b;</button>
            </div>
            <TodoItemList dataItem={addItem} onSelect={deleteItem}/>
        </>
    )
}

export default TodoListForm;