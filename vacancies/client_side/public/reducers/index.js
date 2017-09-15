import {combineReducers} from 'redux';

import lists from './lists';
import currents from './currents';

export default combineReducers({
        lists,
        currents
});
