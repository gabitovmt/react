import React from 'react';
import data from './data.json';
import CommentBox from './CommentBox/CommentBox';

function App() {
  return (
    <div className="App">
      <CommentBox post={data.post} comments={data.comments}/>
    </div>
  );
}

export default App;
