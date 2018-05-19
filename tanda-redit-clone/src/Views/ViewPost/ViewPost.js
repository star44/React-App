import React, { Component } from 'react';
import { redditAPI } from '../../snoowrap';
import { Accordion, Button, Dimmer, Divider, Icon, Image, Loader, List, ListItem } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import Voting from '../../ReusableComponents/Voting/Voting';
import './ViewPost.css';

class ViewPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: null,
      activeComments: [],
      error: false,
    };
    this.Comment = this.Comment.bind(this); 
    this.toggleComment = this.toggleComment.bind(this);
  }

  componentDidMount() {
    const postId = this.props.match.params.postId;
    redditAPI.getSubmission(postId).expandReplies({})
      .then(post => this.setState({ post }))
      .catch(err => this.setState({ error: true }));
  }


  toggleComment(key) {
    let activeComments = this.state.activeComments;
    if (!activeComments.includes(key)) {
      activeComments.push(key);
    }
    else {
      activeComments = activeComments.filter(commentId => commentId !== key);
    }
    this.setState({ activeComments });
  }

  Comment(comment) {
    const key = comment.id;
    const active = this.state.activeComments.includes(key);
    return (
      <ListItem key={key}>
        <Accordion fluid styled>
          <Accordion.Title
            active={active}
          >
            <Voting ups={comment.ups} downs={comment.downs} />
            <div className="floating-left-div">
              <Icon 
                size="large" color="orange" name="user circle" />
              {comment.author.name}
            </div>
            <div className="inline-block comment-width-limit" onClick={(event) => this.toggleComment(key)}>
              {comment.body}
            </div>
          </Accordion.Title>
          <div className="centered-content">
            {active ? 'Unsee' : 'See'} {comment.replies.length} replies
          </div>
          <Accordion.Content active={active}>
            <List divided>
              {comment.replies.map(reply => this.Comment(reply))}
            </List>
          </Accordion.Content>
        </Accordion>
      </ListItem>
    );
  } 

  render() {
    if (this.state.error) {
      return <Redirect to="/error" />;
    }
    if (this.state.post == null) {
      return (
        <Dimmer active>
          <Loader />
        </Dimmer>
      );
    }
    return (
      <div className="centered-content">
        <div className="main-content-div">
          <h1>{this.state.post.title}</h1>
          <Image className="center-block" src={this.state.post.thumbnail} />

          {/* Like / Dislike */}
          <div>
            <Divider hidden />
            <div>
              <div><strong>Upvote Ratio:</strong> {this.state.post.upvote_ratio}</div>
              <div><strong>Ups:</strong> {this.state.post.ups}</div>
              <div><strong>Downs:</strong> {this.state.post.downs}</div>
              <div><strong>Score:</strong> {this.state.post.score}</div>
            </div>
            <Divider hidden />
            <Button color="green" onClick={() => console.log('I DONT DO ANYTHING!')}>Up this post</Button>
            <Button color="red" onClick={() => console.log('ME NEITHER!')}>Down this post</Button>
          </div>

          <Divider />

          <List>
            {this.state.post.comments.map(comment => this.Comment(comment))}
          </List>
        </div>
      </div>
    );
  }
}

export default ViewPost;
