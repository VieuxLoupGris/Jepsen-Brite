import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Contact extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

    render() {
        return (
          <div className="container-fluid">
            Je suis la page de contact
        </div>


        );
    }
}
