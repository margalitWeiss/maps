
export default function Contribution({c}){
    return(
        <div>
        <h2>{c.id}</h2>
        <h2>{c.name}</h2>
        <h2>{c.date}</h2>
        <h2>{c.email}</h2>
        <h3>{c.expereance}</h3>
        <h3>{c.phone}</h3>
        <h3>{c.elsePhone}</h3>
        </div>
    )
}