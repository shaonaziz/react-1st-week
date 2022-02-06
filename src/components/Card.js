import React from "react";
import { StyledCrad } from "./styles/Card.styled";
const Card =({item : {id,title,body,image}})=>{
   return(
       <StyledCrad layout={id % 2 === 0 && 'row-reverse'}>
       <div>
        <h1>{title}</h1>
        <p>{body}</p>
       </div>
       <div>
        <img src={`./images/${image}`} alt="" />
       </div>
       </StyledCrad>
   )
}

export default Card;