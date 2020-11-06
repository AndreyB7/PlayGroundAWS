import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import PostsContextProvider from './contexts/postsContext';
import Posts from './componets/posts';

ReactDOM.render(
    <PostsContextProvider>
      <Posts/>
    </PostsContextProvider>,
  document.getElementById('app')
);