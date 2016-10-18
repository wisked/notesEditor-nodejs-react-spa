import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

// const apiPrefix = "http://localhost:8080";

export default {
    listNotes() {
        return axios.get(apiPrefix + '/notes');
    },

    createNote(data) {
        const req = apiPrefix + '/notes';
        return axios.post(req, data);
    },

    deleteNote(noteId) {
        return axios.delete(apiPrefix + '/notes/' + noteId);
    }
};
