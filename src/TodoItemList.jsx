
const TodoItemList = ({dataItem, onSelect})=>{
    return (
        <>
            <div className="todoItems">
                {
                    dataItem.map((e, i)=>{
                        return (
                            <>
                                <span className="listItem">
                                    &#x203A; {e} <a onClick={()=>{onSelect(i)}}>&#215;</a>
                                </span>
                            </>
                        );
                    })

                }
            </div>
        </>
    );
}

export default TodoItemList;