import React, { createContext, useContext,useState } from "react";

const Userco = createContext();

export default function Context(){
    const [user] = useState("guru");
    return(
        <Userco.Provider value={user}>
            <h1>example</h1>
            <Comp1 />
        </Userco.Provider>
    );
}
function Comp1(){
       return(
    <>
    <h2> 1 component</h2>
        <Comp2/>
    </>
       )
}
function Comp2(){
    return(
 <>
 <h2> 2 component</h2>
     <Comp3/>
 </>
    )
}
function Comp3(){
    return(
 <>
 <h2> 3 component</h2>
     <Comp4/>
 </>
    )
}
function Comp4(){
    return(
 <>
 <h2> 4 component</h2>
     <Comp5/>
 </>
    )
}
function Comp5(){
    const user = useContext(Userco)
    return(
 <>
 <h2> 5 component</h2>
  <h1> the user is {user} </h1>
 </>
    )
}