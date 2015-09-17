import React from 'react';
import marked from 'marked';

export default class Comment extends React.Component {
  get comment() {
    return this.props.data;
  }

  render() {
    let rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    let classStr = `comment ${this.comment.sending ? 'sending' : ''}`;
    return (
      <div className={classStr}>
        <h2 className="commentAuthor">
          {this.comment.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
}
