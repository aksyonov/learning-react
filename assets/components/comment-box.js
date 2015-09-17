import React from 'react';
import CommentList from './comment-list';
import CommentForm from './comment-form';

export default class CommentBox extends React.Component {
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}
