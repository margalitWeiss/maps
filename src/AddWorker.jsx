import {useForm} from "react-hook-form";
import "./AddWorker.css"

const AddWorker =({addToArr})=>{
    let azrachut=[
        {id:1,name:"USA"},
        {id:2,name:"izrel"},
        {id:3,name:"lita"}
];
    let {register,handleSubmit,getValues,reset,formState:{errors,isValid}}=useForm({
        mode:"all",defaultValues:{
            name:"stam name"
        }
    });
    const save =(data)=>{
        alert("פרטיך נשמרו בהצלחה "+JSON.stringify(data));
        addToArr(data);


        reset();
    }
    console.log(errors);
    return(
        <form className="add-worker-form" noValidate onSubmit={handleSubmit(save)}>
            <input {...register("name",{required:{value:true,message:"name is required"}})}type="text" placeholder="name"/>
            {errors.name&&<div className="err-msg">{errors.name.message}</div>}
            <input {...register("id",{minLength:{value:9,message:"id is minLength"},maxLength:{value:9,message:"id is maxLength"},required:{value:true,message:"id is required"}})}type="number" placeholder="id"/>
            {errors.id&&<div className="err-msg">{errors.id.message}</div>}
            <input {...register("date",{min:{value:"14/12/2024",message:"תאריך לא תקין"}})}type="date" placeholder="date"/>
            {errors.date&&<div className="err-msg">{errors.date.message}</div>}
            <input {...register("email",{pattern:/^[A-Za-z0-9]{5,10}@(co|com)$/})}type="email" placeholder="email"/>
            {errors.email&&<div className="err-msg">email is not in correct format</div>}
            <input {...register("expereance",{min:{value:3,message:"the min value is 3"}})}type="number" placeholder="expereance"/>
            {errors.expereance&&<div className="err-msg">{errors.expereance.message}</div>}
            <input {...register("phone",{minLength:{value:7,message:"id is minLength"},maxLength:{value:10,message:"id is maxLength"}})}type="number" placeholder="id"/>
            {errors.phone&&<div className="err-msg">{errors.phone.message}</div>}
            <input {...register("elsePhone",{minLength:{value:7,message:"id is minLength"},maxLength:{value:10,message:"id is maxLength"},validate:{notSame:(v)=>{return(v!=getValues("phone"))||"phone conflict"}}})}type="number" placeholder="id"/>
            {errors.elsePhone&&<div className="err-msg">{errors.elsePhone.message}</div>}
            <select {...register("type")}>
                {azrachut.map(item=><option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
            <input type="submit" disabled={!isValid}/>




        </form>
    )
}
export default AddWorker;