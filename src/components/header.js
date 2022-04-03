import React from "react";
import '../css/styles.css';

 export default function Headerj (props){ 
    return(
  <header > 
    <div className="logo">Logo</div>
    <input onChange={props.keyword}  type='text' /> 
  </header>
)
} 
