import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Divider, Image, List, ListDescription, ListHeader, ListItem } from 'semantic-ui-react';
import { redditAPI } from '../../snoowrap';
import Voting from '../../ReusableComponents/Voting/Voting';
import './HotPosts.css';

class HotPosts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hotPosts: [],
      openPost: null,
    };
    this.ListItemHandler = this.ListItemHandler.bind(this);
    this.PostListItem = this.PostListItem.bind(this);
  }

  // Get some hot posts and save them into state
  componentDidMount() {
    redditAPI.getHot().then((hotPosts) => {
      this.setState({ hotPosts });
    });
  }

  ListItemHandler(postId) {
    this.setState({
      openPost: postId,
    });
  }

  PostListItem(post) {
    return (
      <ListItem className="hoverable-list-item" key={post.id}>
        <div className="inline-block header-width-limit" onClick={() => this.ListItemHandler(post.id)}>
          <ListHeader>{post.title}</ListHeader>
          <Divider hidden />
          <ListDescription>
            <div>Author: {post.author.name}</div>
            <div>Comments: {post.num_comments}</div>
            <div>Score: {post.score}</div>
          </ListDescription>
        </div>
        <div className="floating-left-div">
          <Image rounded src={post.thumbnail} />
        </div>
        <Voting ups={post.ups} downs={post.downs} />
      </ListItem>
    );
  }

  render() {
    if (this.state.openPost !== null) {
      return (<Redirect to={`/post/${this.state.openPost}`} />);
    }
    return (
      <div className="centered-content">
        <div className="main-content-div">
          
          <h1>Reddit Clone</h1>

          <Divider />

          <List divided>
            {this.state.hotPosts.map((post) => this.PostListItem(post))}
          </List>
        </div>
      </div>
    );
  }
}

export default HotPosts;
