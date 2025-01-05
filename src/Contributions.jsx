
import Contribution from "./Contribution";
import Campaign from "./campaign";
import React from 'react';
export default function Contributions({arr}) {
  return (
    <ul >
      {arr.map((item, index) => (
        
        <li key={index}>
          {<Contribution c={item} />}
        </li>
      ))}
    </ul>
   
  );
}