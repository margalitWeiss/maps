import React, { useState } from 'react';
import './Form.css';  // ייבוא קובץ ה-CSS


const Form = ({updatePoint}) => {
  const [query, setQuery] = useState('');          // מה שהמשתמש מקליד
  const [filteredCities, setFilteredCities] = useState([]); // רשימה של ערים שתואמות לחיפוש

  // פונקציה לקבלת הצעות על פי הקלט של המשתמש
  const getOption = (value) => {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${value}&limit=5`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFilteredCities(data.map(item => ({
            display_name: item.display_name,   // שם העיר
            lat: item.lat,                      // קו רוחב
            lon: item.lon                       // קו אורך
          })));
      })
      .catch(err => console.log(err));
  };

  // עדכון הרשימה של הערים המוצעות על פי הקלט של המשתמש
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // אם יש תו חיפוש, מבצעים קריאה ל-API ומעדכנים את filteredCities
    if (value) {
      getOption(value);
    } else {
      setFilteredCities([]);
    }
  };

  // עדכון שדה הקלט לערך שנבחר
  const handleCitySelect = (city) => {
    setQuery(city.display_name);
    updatePoint(city.lat,city.lon)
    setFilteredCities([]); // סגירת חלונית ההשלמה לאחר בחירת עיר
  };
  let [user,setUser]=useState({place:'',userName:"",phone:"",email:"",isCoffy:false,isInternet:false,isKitchen:false,rooms:0,distans:0});
  const change = (e) => {
    let { name, type, value } = e.target; // חילוץ הנתונים מהאירוע
    if (type === "number") { // אם השדה הוא מספרי
        value = +value; // המרת הערך למספר
    }
    setUser((prev) => ({ ...prev, [name]: value })); // עדכון פרטי התרומה
};
  return (
    <form >
      <div className="input-container">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="חפש עיר"
          className="input-field"
        />
        
        {/* חלונית של הצעות */}
        {filteredCities.length > 0 && (
          <div className="suggestions-container">
            {filteredCities.map((city, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleCitySelect(city)} // עדכון השדה לערך שנבחר
              >
                {city.display_name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* טופס פרטי המשתמש */}
      <label className="form-label">שם משתמש</label>
      <input type="text" className="form-input" value={user.userName} name='userName' onChange={change}/>

      <label className="form-label">טלפון</label>
      <input type="text" className="form-input" value={user.phone} name='phone' onChange={change}/>

      <label className="form-label">כתובת מייל</label>
      <input type="text" className="form-input" value={user.email} name='email' onChange={change}/>

      <label className="form-label checkbox-label">
        <input type="checkbox" value={user.isInternet} name='isInternet' onChange={change}/> האם נדרש חיבור לאינטרנט
      </label>

      <label className="form-label checkbox-label">
        <input type="checkbox" value={user.isKitchen} name='isKitchen' onChange={change}/> האם נדרש מטבח
      </label>

      <label className="form-label checkbox-label">
        <input type="checkbox" value={user.isCoffy} name='isCoffy' onChange={change}/> האם נדרשת מכונת קפה
      </label>

      <label className="form-label">מספר חדרים</label>
      <input type="text" className="form-input" name='rooms' value={user.rooms} onChange={change}/>

      <label className="form-label">מרחק שהוא מוכן לזוז מהכתובת שהוזנה</label>
      <input type="text" className="form-input" name='distans' value={user.distans} onChange={change}/>
    </form>
  );
};

export default Form;
