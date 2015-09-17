import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import marked from 'marked';

export default class Comment extends React.Component {
  get comment() {
    return this.props.data;
  }

  render() {
    let rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <Panel header={this.comment.author}  bsStyle={this.comment.sending ? 'warning' : 'primary'}>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </Panel>
    );
  }
}
