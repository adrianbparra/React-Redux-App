import React from 'react';
import './App.css';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button,Container,Content,  } from 'react-bulma-components';

import {connect} from "react-redux";
import {getBoredIdea} from "./actions";

import BoredIdea from "./components/BoredIdea";
import BoredType from "./components/BoredType";

function App( props ) {

  const updateBoredIdea = e => {

    props.getBoredIdea();

  }

  

  return (
    <Container className="App">

      <Content>
        <h1>Bored? We have the solution for you.</h1>
      </Content>

      <Content>
        <p>We give you an idea of something to do.</p>
        
        <p>Select a Type to narrow your options.</p>
      </Content>
      <Content>
        <BoredType />
      </Content>

      <Button className="button" disabled={props.isFetching} color="primary" onClick={updateBoredIdea}>Bored?</Button>
      <Content>
        {props.data ? <BoredIdea data ={props.data} /> : <p>Just press it to get an idea.</p>}
      </Content>
    </Container>
  );
}

const mapStatetoProps  = state => {
  return {
    data : state.data,
    isFetching: state.isFetching
  }
}

export default connect(mapStatetoProps, {
  getBoredIdea,

})(App);
