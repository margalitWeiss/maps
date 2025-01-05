import { useState } from 'react';
import './App.css';
import Form from './Form';
import Map from './Map';

const App = () => {//
  let [lon, setLon] = useState(34.8324376);// ברירת מחדל
  let [lat, setLat] = useState(32.0873899);// ברירת מחדל
// פונקציה לעדכון המיקום הנבחר
  const updatePoint = (x, y) => {
    setLat(x);
    setLon(y);
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h1>חיפוש עיר</h1>
        <Form updatePoint={updatePoint} />
      </div>
      <div className="map-container">
        <Map lon={lon} lat={lat} />
      </div>
    </div>
  );
};

export default App;
