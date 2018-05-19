import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// styling files
import './index.css';
import './semantic/dist/semantic.min.css';

// components to render
import App from './Views/App/App';
import Error from './Views/Error/Error';
import HotPosts from './Views/HotPosts/HotPosts';
import ViewPost from './Views/ViewPost/ViewPost';

import registerServiceWorker from './registerServiceWorker';

class ReditClone extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/example-page" component={App} /> {/* This page is cool so I keep it here :P */}
          <Route exact path="/" component={HotPosts} />
          <Route exact path="/error" component={Error} />
          <Route path="/post/:postId" component={ViewPost} />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<ReditClone />, document.getElementById('root'));
registerServiceWorker();
