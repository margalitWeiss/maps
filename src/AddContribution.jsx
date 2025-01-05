import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function AddContribution(props){
    let navig = useNavigate();
   
    let [basic,setBasic]=useState({sum:0,name:"תרומה אנונימית",dedication:""});
    let[myError,setMyError]=useState({});
    function validate(){
        let err={};
        if(basic.sum==0){
            err.sum="שדה חובה"
        }
        else if(basic.sum!=parseInt(basic.sum)){
            err.sum="אין אפשרות לשלם באגורות"
        }
        else if((basic.sum<10&&!props.dollarState)||basic.sum<3){
            err.sum="אין אפשרות תרומה מתחת 10₪"
        }

        return err;
    }
    function save(e){
        e.preventDefault();
        console.log(e);
        let result = validate();
        if(Object.keys(result).length==0)
        {
            alert("נשמר בהצלחה");
           
            let copy={...basic}
            if(props.dollarState==true){
                copy.sum=parseInt(copy.sum*props.dollarRate);
            }
            props.onAdd(copy);
            setBasic({sum:0,name:"תרומה אנונימית",dedication:""})
            navig("/Contributions")
        }
       setMyError(result)
    }
    function change(e){
        let {name,type,value}=e.target;
        if(type=="number"){
            value = +value;
        }
        let copy={...basic};
        copy[name]=value;
        setBasic(copy);

    }
    return(
        <form action="" onSubmit={save} className="contribution-form">
            <label >הקש סכום תרומה</label>
            <input type="number" name="sum" value={basic.sum} onChange={change}/>
            {myError.sum && <div className="error">{myError.sum}</div>}

            <label>הקש שם</label>
            <input type="text" name="name" value={basic.name} onChange={change}/>
            <label>הקש הקדשה</label>
            <input type="text" name="dedication" value={basic.dedication} onChange={change}/>
            <input type="submit" value="שלח תרומה" className="submit-button"/>
            

        </form>
    )
}