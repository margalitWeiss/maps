
import { useState, useEffect } from "react";
import Coin from "./Coin";

export default function Campaign({ getFromLocalStorage,coin }) {
  const [arr, setArr] = useState(getFromLocalStorage());
  let [monny, setMonny] = useState(0);
  let [cnt, setCnt] = useState(0);
  useEffect(() => {
    // שימוש ב-reduce לחישוב הסכום והכמות
    const totalMonny = arr.reduce((acc, item) => acc + item.sum, 0);
    const totalCnt = arr.length-1;

    setMonny(totalMonny);
    setCnt(totalCnt);
  }, [arr]);  // התלות ב-arr, כלומר החישוב יתבצע מחדש אם המערך משתנה
  

  return (
    <>
      <h2>תורמים {cnt}</h2>
      <h3>{((parseInt(monny) * 100) / 80000).toFixed(0)}%</h3>
      <h1>{<Coin sum={monny} dollarRate={coin.dollarRate} type={coin.type}/>}</h1>
      <h4><Coin sum={80000} dollarRate={coin.dollarRate} type={coin.type} /> יעד הקמפיין</h4>
    </>
  );
}