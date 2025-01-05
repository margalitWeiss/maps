import { useState } from "react"
import Chip from "./Chip";
export default function AllChip(){
    let [arr,setArr]=useState([]);
    let [inpChipalue,setInpValue]=useState("");
    
   function save(){
    let basic={id: arr.length == 0 ? 0 : arr[arr.length - 1].id + 1, name: inpChipalue };
      let copy=[...arr,basic];
      setArr(copy);
      setInpValue("")
   }
   function Change(e){
    let value=e.target.value;
    setInpValue(value)
   }
   function Delete(id){
    let copy=arr.filter(item=>item.id!=id)
    setArr(copy);
   }
    return(
     <div style={{ "border": "solid 2px", "width": "500px", "height": "55px", display: "flex" }}>
     {arr.map((item) => { return <Chip c={item} key={item.id} Delete={Delete}/>}
      )}
      <input type="text" onChange={Change} placeholder="add text" value={inpChipalue} style={{ "width": "90px", "height": "50px" }}/>
      <button onClick={save}>save</button>
      </div>
     
    )
}