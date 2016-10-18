import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _notes = [];
let _loadingError = null;
let _isLoading = null;

function formatNote(note) {
    return {
        id: note._id,
        title: note.title,
        text: note.text,
        color: note.color || 'rgb(28, 166, 107)',
        createAt: note.createAt
    };
}
const TaskStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getNotes() {
        return _notes;
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch (action.type) {
        case AppConstants.LOAD_NOTES_REQUEST: {
            _isLoading = true;

            TaskStore.emitChange();
            break;
        }
        case AppConstants.LOAD_NOTES_SUCCESS: {
            _isLoading = true;
            _notes.action.notes.map(formatNote);
            _loadingError = null;

            TaskStore.emitChange();
            break;
        }
        case AppConstants.LOAD_NOTES_FAIL: {
            _loadingError = action.error;

            TaskStore.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});
export default TaskStore;
