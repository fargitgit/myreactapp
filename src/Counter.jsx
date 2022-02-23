import { useState } from "react";

const Counter = ()=>{
    let time = new Date().toLocaleTimeString();
    const [val, updateVal] = useState(0);
    const [n_time, u_time] = useState(time);
    const [clock, updateTime] = useState(time);
    const [text, updatedText] = useState("Don't Touch");
    const increaseVal = ()=>{
        updateVal(val + 1);
    }
    const decrementVal = ()=>{
        return val > 0 ? updateVal(val - 1) : '';
    }
    const getTime = ()=>{
        u_time(new Date().toLocaleTimeString());
    }
    setInterval(()=>{
        updateTime(new Date().toLocaleTimeString());
    },1000)

    const chgText = ()=>{
        updatedText('Why Touch');
        setTimeout(()=>{
            updatedText('Double Click');
        },2000)
    }
    const chgText2 = ()=>{
        updatedText('Thanks');
    }
    return(
        <div className="bg">
            <h2> {val} </h2>
            <button onClick={increaseVal}>+</button>
            <button onClick={decrementVal}>-</button>
            <hr />
            <h2>{n_time}</h2>
            <button onClick={getTime}>Get Time</button>
            <hr />
            <h5>{clock}</h5>
            <button onDoubleClick={chgText2} onClick={chgText}>{text}</button>
        </div>

    );
}

export default Counter;