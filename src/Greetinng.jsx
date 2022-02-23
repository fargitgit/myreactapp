const Greeting =  ()=>{
    let msg = '';
    let d = new Date();
    let time = d.getHours()

    if(time > 12 && time <= 12){
        msg = 'Morning';
    } else if(time > 12 && time <= 17){
        msg = 'Afternoon';
    } else {
    msg = 'Night';
    }
    return(
        <div className="greetings">
        <div className="msg">
          <div style={{fontSize:'20px', textAlign: 'center'}}>{d.toLocaleTimeString()}</div>
          Good <span>{msg}</span></div>
    </div>
    );
}
export default Greeting;