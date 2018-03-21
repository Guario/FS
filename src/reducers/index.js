import { combineReducers } from 'redux';

import files from './files';
import folders from './folders';

export default combineReducers({
    files,
    folders
});