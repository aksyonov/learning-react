import {Reactor} from 'nuclear-js';
import CommentStore from './stores/comments';

const reactor = new Reactor({debug: true});

reactor.registerStores({
  comments: new CommentStore()
});

export default reactor;
