
import { useState } from "react";

export default function Sort({ arr, updateArr }) {
  const [selectedOption, setSelectedOption] = useState(""); // מצב לבחירת המיון

  const handleSelectChange = (e) => {
    const newSelection = e.target.value; // הערך שנבחר עכשיו
    setSelectedOption(newSelection); // עדכון הערך של selectedOption

    let newSortedArr = [...arr]; // יוצרים העתק של המערך כדי לא לשנות את המערך המקורי

    // המיון מבוצע לפי האפשרות שנבחרה
    if (newSelection === "") {
      newSortedArr = arr; // אם לא נבחר כלום, המערך נשאר כפי שהוא
    } else if (newSelection === "heightContribution") {
      newSortedArr.sort((a, b) => b.sum - a.sum); // מיון לפי גובה תרומה
    } else if (newSelection === "old") {
      newSortedArr.sort((a, b) => new Date(a.date) - new Date(b.date)); // מיון לפי תאריך ישן קודם
    } else if (newSelection === "new") {
      newSortedArr.sort((a, b) => new Date(b.date) - new Date(a.date)); // מיון לפי תאריך חדש קודם
    }

    // עדכון המערך אחרי המיון
    updateArr([{id: 0, sum: 0, name: "", dedication: "", date: ""}, ...newSortedArr]);
  };

  return (
    <select value={selectedOption} onChange={handleSelectChange}>
      <option value="">בחר מיון</option>
      <option value="new">חדש</option>
      <option value="old">ישן</option>
      <option value="heightContribution">גובה תרומה</option>
    </select>
  );
}