import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonInput from 'react-bootstrap/lib/ButtonInput';
import Input from 'react-bootstrap/lib/Input';
import {submitComment} from '../actions';

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    };
  }

  validateForm() {
    var author = React.findDOMNode(this.refs.author).firstChild.value;
    var text = React.findDOMNode(this.refs.text).firstChild.value;
    return text && text.trim() && author && author.trim();
  }

  handleSubmit(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).firstChild.value.trim();
    var text = React.findDOMNode(this.refs.text).firstChild.value.trim();
    if (!this.validateForm()) return;
    submitComment({author: author, text: text});
    React.findDOMNode(this.refs.author).firstChild.value = '';
    React.findDOMNode(this.refs.text).firstChild.value = '';
    this.handleChange();
  }

  handleChange() {
    this.setState({disabled: !this.validateForm()});
  }

  render() {
    return (
      <form className="commentForm" onSubmit={::this.handleSubmit} onChange={::this.handleChange}>
        <Input type="text" placeholder="Your name" ref="author" />
        <Input type="text" placeholder="Say something..." ref="text" />
        <ButtonInput type="submit" value="Post" bsStyle="primary" disabled={this.state.disabled} />
      </form>
    );
  }
}
