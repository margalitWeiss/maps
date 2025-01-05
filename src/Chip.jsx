
export default function Chip({c,Delete}){
    return(
       <div>
        {c.name} <button onClick={()=>{Delete(c.id)}} >x</button>
       </div>
    )
}