import React from "react";


const BoredIdea = props => {

    console.log(props.data)

    const {activity, accessibility, type, participants, price, link, key} = props.data;


    return (
        <div>
            <h2>{activity}</h2>


            <p>Type: {type}</p>

            <p>Price: ${price}</p>
            <p>Participants : {participants}</p>
            <p>Accessible: {accessibility * 100}%</p>
            {link && <p>Link: {link}</p>}
        </div>
    )
}
//social, busywork,recreational,relaxation,cooking,education,music,charity,education

export default BoredIdea;