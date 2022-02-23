import { useState } from "react";

const KeepForm = ({onSelect}) =>{

    const [getVal, updateVal] = useState({
        title: '',
        description : ''
    });
    const getValue = (e)=>{
        const {name, value} = e.target;
        updateVal((prev)=>{
            return {...prev, [name]: value}
        }); 
    }
    const addCard = ()=>{
        if(getVal.title != ''){
            return onSelect(getVal);
        } else {
            alert('Enter Value....');
        }
    }
    return (
        <>
            <div className="container mt-5">
                <div className="col-4 mx-auto form shadow border border-light">
                    <input onChange={getValue} type="text" aria-label="First name" className="form-control form-control-lg border-0 shadow-none" placeholder='Enter title' name="title" value={getVal.title} />
                    <textarea rows="3" className="form-control form-control border-0 shadow-none" placeholder="Leave a comment here" onChange={getValue} id="floatingTextarea" name="description" value={getVal.description}></textarea>
                    <button onClick={addCard}>+</button>
                </div>
            </div>
        </>
    );
}

export default KeepForm;