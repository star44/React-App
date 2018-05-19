/**
 * Image from: 
 * https://tenor.com/view/fist-fight-fist-fight-film-idont-want-to-fight-why-are-you-trying-to-pick-afight-charlie-day-gif-7391046
 * 
 * (i.e. the first thing I found on google)
 */

import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import ErrorImage from './Error.png';

import './Error.css';

class Error extends Component {

  render() {
    return (
      <div className="centered-content">
        <div className="main-content-div">
          <h1>There was an error!</h1>
          <Image src={ErrorImage} centered />
        </div>
      </div>
    );
  }
}

export default Error;
