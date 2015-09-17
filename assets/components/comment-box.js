import React from 'react';
import CommentList from './comment-list';
import CommentForm from './comment-form';

export default class CommentBox extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h1>Comments</h1>
          <CommentList />
          <CommentForm />
        </div>
      </div>
    );
  }
}
