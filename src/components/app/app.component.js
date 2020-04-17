import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./app.styles.css";

import PostsPage from "../posts-page/posts-page.component";
import CommentsPage from "../comments-page/comments-page.component";
import Header from "../header/header.component";

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <div className="container">
          <Switch>
            <Route path='/' component={PostsPage} exact />
            <Route path='/post/:postId' component={CommentsPage} exact />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
