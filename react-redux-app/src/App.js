import React from 'react';
import './App.css';

import {connect} from "react-redux";
import {getBoredIdea} from "./actions";
import BoredIdea from "./components/BoredIdea";


function App( props ) {

  const updateBoredIdea = e => {

    props.getBoredIdea();

  }

  return (
    <div className="App">

      <header>
        <h1>Bored? We have the solution for you.</h1>
      </header>

      
      <p>We give you an idea of something to do.</p>
      


      <button className="button" onClick={updateBoredIdea}>Bored?</button>

      {props.data ? <BoredIdea data ={props.data} /> : <p>Just press it to get an idea.</p>}
    </div>
  );
}

const mapStatetoProps  = state => {
  return {
    data : state.data,
  }
}

export default connect(mapStatetoProps, {
  getBoredIdea,
})(App);
