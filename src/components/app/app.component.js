import React from 'react';
import './app.styles.css';
import PostsPage from '../posts-page/posts-page.component';

const App = () => {
  return (
    <div className="app">
      <PostsPage />
    </div>
  );
}

export default App;