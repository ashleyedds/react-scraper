import React, { Component } from 'react';
import Search from "./components/Form";
import Results from "./components/Results";
import Saved from "./components/Saved";
import { Container, Jumbotron } from "reactstrap";
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>New York Times Scraper</h1>
          <h3>Search for and annotate articles of interest</h3>
        </Jumbotron>
        <Search />
        <Results />
        <Saved />
      </Container>
    );
  }
}

export default App;
