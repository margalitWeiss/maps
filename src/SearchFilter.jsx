import React, { useState } from 'react';

export default function SearchFilter({ arr, updateFilteredArr }) {
  
  const [filterText, setFilterText] = useState("");
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterText(value);

    if (value == "") {
      // אם אין טקסט, מחזירים את המערך המקורי
      updateFilteredArr(arr,value);
    } else {
      
      // מסננים את המערך, מוודאים שהשדות קיימים
      const filteredArr = arr.filter((item) => {
        const name = item.name || "";  // אם אין name, נניח ערך ריק
        const dedication = item.dedication || "";  // אם אין dedication, נניח ערך ריק
        return(name.includes(value)||dedication.includes(value))
      });
      updateFilteredArr([{id:0,sum:0,name:"",dedication:"",data:""},...filteredArr],value);  // מעדכנים את המערך המסונן
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={filterText}
        onChange={handleFilterChange}
        placeholder="חפש לפי שם או הקדשה"
      />
    </div>
  );
}