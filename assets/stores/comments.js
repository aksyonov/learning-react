import {Store, toImmutable} from 'nuclear-js';
import {
    SAVE_COMMENT_START,
    SAVE_COMMENT_SUCCESS,
    SAVE_COMMENT_ERROR
} from '../action-types';


export default class CommentStore extends Store {
  getInitialState() {
    return toImmutable([]);
  }

  initialize() {
    this.on(SAVE_COMMENT_START, this.commentSent);
    this.on(SAVE_COMMENT_SUCCESS, this.finishSend);
    this.on(SAVE_COMMENT_ERROR, this.rollback);
  }

  commentSent(state, data) {
    data.sending = true;
    return state.push(toImmutable(data));
  }

  finishSend(state, data) {
    let id = state.findIndex((el) => el.get('text') == data.text && el.get('author') == data.author);
    return state.update(id, (comment) => comment.set('sending', false));
  }

  rollback(state, data) {
    let id = state.findIndex((el) => el.get('text') == data.text && el.get('author') == data.author);
    return state.remove(id);
  }
}
