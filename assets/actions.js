import reactor from './reactor';
import getters from './getters';
import {
  SAVE_COMMENT_START,
  SAVE_COMMENT_SUCCESS,
  SAVE_COMMENT_ERROR
} from './action-types';

export function submitComment(data) {
  reactor.dispatch(SAVE_COMMENT_START, data);
  setTimeout(() => reactor.dispatch(SAVE_COMMENT_SUCCESS, data), 1000);
}
