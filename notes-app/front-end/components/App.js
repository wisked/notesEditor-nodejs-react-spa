import React, { PropTypes } from 'react'

import NoteStore from '../stores/NoteStore';
import NoteActions from '../actions/NoteActions';

import Notes from './Notes';
import NotesEditor from './NotesEdditor';
import NotesGrid from './NotesGrid';

import '../styles/NoteEditor.less';

function getStateFromFlux() {
    return {
        isLoading: NoteStore.isLoading(),
        notes: NoteStore.getNotes()
    };
}

const App = React.createClass({
    getInitialState: function() {
        return getStateFromFlux();
    },
    componentWillMount() {
        NoteActions.loadNotes();
    },
    componentDidMount() {
        NoteStore.addChangeListener(this._onChange);
    },
    componentWillUnmount() {
        NoteStore.removeChangeListener(this._onChange);
    },
    handleAddNote(data) {
        NoteActions.createNote(data);
    },
    handleNoteDelete(note) {
        NoteActions.deleteNote(note.id)
    },

    render () {
        return (
            <div>
                <NotesEditor onNoteAdd={this.handleAddNote}/>
                <NotesGrid notes={this.state.notes} onDelete={this.handleNoteDelete}/>
            </div>
        )
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
})

export default App;
