import React, { Component } from 'react';
import { Icon, Popup } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './Voting.css';

class Voting extends Component {

  constructor(props) {
    super(props);
    this.state = {
      upvoted: false,
      downvoted: false,
      ups: 0,
      downs: 0,
    };
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
  }
  
  componentDidMount() {
    this.setState({
      ups: this.props.ups,
      downs: this.props.downs,
    });
  }

  upvote () {
    this.setState({
      ups: this.state.upvoted ? this.state.ups - 1 : this.state.ups + 1,
      upvoted: !this.state.upvoted,
    });
  }

  downvote () {
    this.setState({
      downs: this.state.downvoted ? this.state.downs - 1 : this.state.downs + 1,
      downvoted: !this.state.downvoted,
    });
  }
 
  render() {
    return (
      <div className="floating-right-div">
        <div className="inline-block small-padding">
          <Popup 
            trigger={
            <Icon
              color={this.state.upvoted ? "green" : "grey"}
              name="thumbs up"
              onClick={() => this.upvote()}
            />}
            content="Vote up (in theory...)"
          />
          <div>{this.state.ups} ups</div>
        </div>
        <div className="inline-block small-padding">
          <Popup 
            trigger={
            <Icon
              color={this.state.downvoted ? "red" : "grey"}
              name="thumbs down"
              onClick={() => this.downvote()}
            />}
            content="Vote down (in theory...)"
          />
          <div>{this.state.downs} downs</div>
        </div>
      </div>
    );
  }
}

Voting.propTypes = {
  ups: PropTypes.number.isRequired,
  downs: PropTypes.number.isRequired,
}

export default Voting;
