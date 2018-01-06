import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom'
  



class review2 extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }



        this.handleChange = this.handleChange.bind(this);
    }



    handleChange = (selectedOption) => {
        this.setState({
            ...this.state,
            selectedOption: selectedOption,
        });
    }

    render() {
        return (
            <div className="review2">


Hi

            </div>
        );
    }
}


export default review2 