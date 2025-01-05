import Checkbox from '@mui/material/Checkbox';
import React, { useState } from 'react';
import { MonetizationOn } from '@mui/icons-material';
import { MonetizationOnOutlined } from '@mui/icons-material';
export default function ChooseDollareOrShekele({coin,changeToDollar}){
    const [isChecked, setIsChecked] = useState(false);

  // פונקציה שתעודכן כאשר ה-checkbox משתנה
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if(isChecked){
    let copy={...coin};
    copy.type="DOLLAR"
    changeToDollar(copy,isChecked);
    }
    else{
        let copy={...coin};
        copy.type="SHEKEL";
        changeToDollar(copy,isChecked);
    }

  };

  return (
    <div>
      
        <label>דולר</label>
        <Checkbox
        icon={<MonetizationOnOutlined color='error'/>}
        checkedIcon={<MonetizationOn color='success'/>}
        type="checkbox" 
        checked={isChecked} 
        onChange={handleCheckboxChange} 
        />
      
    </div>
  );
}