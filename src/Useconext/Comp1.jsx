import { useContext } from 'react';
import {Fname, Lname} from './Main';

const Comp1 = () => {
    const fname = useContext(Fname);
    const lname = useContext(Lname);
    return(
        <>
          <h1> Hello my name is {fname} {lname} </h1>
        </>
    );
}

export default Comp1;

