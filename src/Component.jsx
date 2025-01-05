import { useState } from "react"

export default function Component(){
    [inpChipalue,setInpValue]=useState("");
   function Change(){
    let value=e.target;
    setInpValue(value)
   }
    return(
       <>
       <input type="text" onChange={Change}/>
       </>
    )
}