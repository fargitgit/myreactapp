import Comp1 from "./Comp1";
import { createContext } from "react";

const Fname = createContext();
const Lname = createContext();

const Main = () => {
   return(
     <> 
        <Fname.Provider value={"Farheen"}>
          <Lname.Provider value={"Ansari"}>
            <Comp1 />
          </Lname.Provider>
        </Fname.Provider>
      </>
   )
}

export default Main;
export {Fname, Lname};