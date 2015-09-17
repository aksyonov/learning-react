import React from 'react';
import ReactorComponent from '../reactor-component';
import Comment from './comment';
import {comments} from '../getters';

export default class CommentList extends ReactorComponent {
  getDataBindings() {
    return {comments};
  }

  render() {
    let commentNodes = this.state.comments.map((comment, index) => (
      <Comment data={comment} key={index}>
        {comment.text}
      </Comment>
    ));
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}
