import Chip from "./Chip";
import { useState } from 'react'


export default function ListCiph() {
    let [chips, setChips] = useState([])
    let [inpTxt, setInpTxt] = useState("");
    function save() {
        let newChip = { id: chips.length == 0 ? 0 : chips[chips.length - 1].id + 1, value: inpTxt }
        let copy = [...chips, newChip];
        setChips(copy);
        setInpTxt("")
    }
    function changeTxt(e) {
        let txt = e.target.value;
        setInpTxt(txt)
    }
    function deleteChip(id) {
        let findChip = chips.filter(item => item.id != id)
        setChips(findChip)
    }
    return (
        <>
            <div style={{ "border": "solid 2px", "width": "500px", "height": "100px", display: "flex" }}>
                {chips.map(item => { return <Chip chip={item} key={item.id} del={deleteChip}/> })}
                <input type="text" placeholder="add text" onChange={changeTxt} value={inpTxt}
                    style={{ "width": "90px", "height": "50px", }} />
            </div>
            <button onClick={save}>save</button>
        </>
    )
}