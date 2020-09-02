import React from 'react';

const AvatarList = (props) =>{
    return(
        <div className="avatar-card">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/> 
            <h1>{props.name}</h1>
            <p>{props.work}</p>
        </div>
    )
}

export default AvatarList;