import React from 'react';
import "./style.css";
export default function Footer ( {src, title, sectionTime, sectionDate}){
    return (
        <div className="selected">
           <div className="Movie">
               <img src={src} alt={title}/>
           </div>
           {title} <br/> {`${!sectionDate? "" : ` ${sectionDate} -`}  `}  {`${!sectionTime? "" : sectionTime}`}
        </div>
    )
}