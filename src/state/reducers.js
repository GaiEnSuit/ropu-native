import initialstate from './initialstate';

// action actiontypes
import {

} from './actiontypes';

const rootReducer = (state = initialstate, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default rootReducer;
