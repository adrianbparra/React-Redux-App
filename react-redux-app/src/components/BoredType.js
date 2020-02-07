import React from "react";
import {connect} from "react-redux";

import { Button,Container,Content } from 'react-bulma-components';

import {setType} from "../actions"

const BoredType = props => {


    const UpdateType = type => {
        if(type===props.selectedType){
            props.setType("")
            return
        }
        props.setType(type)

    }


    return (
        <div>
            {props.type.map(type => {
                let color = type === props.selectedType ? "primary" :  "info"
               return <Button color={color} onClick={()=>UpdateType(type)} className="option_button" key={type}>{type}</Button>
            })}

        </div>
    )
}

const mapStatetoProps = state => {
    return {
        type: state.type,
        selectedType: state.selectedType,
    }
}

export default connect(mapStatetoProps, {
    setType,
} )(BoredType);