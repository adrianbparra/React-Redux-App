import React from "react";


const BoredIdea = props => {

    console.log(props.data)

    const {activity, accessibility, type, participants, price, link, key} = props.data;


    return (
        <div>
            <h2>{activity}</h2>

            
            <p>Type: {type}</p>

            <p>Price: {price}</p>
        </div>
    )
}


export default BoredIdea;