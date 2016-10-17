import React, { PropTypes } from 'react'


class NotesEditor extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            text: '',
            color: 'rgb(28, 166, 107)'
        }
    }
    handleTextChange(event) {
        this.setState({
            text: event.target.value
        });
    }
    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        });
    }
    handleAddNote() {
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        }
        this.props.onNoteAdd(newNote);
        this.setState({
            title: '',
            text: '',
            color: 'rgb(28, 166, 107)'
        });
    }
    render () {
        return (
            <div className="NotesEditor">
                <input
                    type="text"
                    className="NoteEditor-title"
                    placeholder="Enter title"
                    value={this.state.title}
                    onChange={this.handleTitleChange.bind(this)}
                    />
                <textarea
                    placeholder="input text"
                    rows={5}
                    className="NoteEditor-text"
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}
                    />
                <div>
                    <button
                        className="NoteEditor-button"
                        disabled={!this.state.text}
                        onClick={this.handleAddNote.bind(this)}
                        >
                            Add Note
                        </button>
                </div>
            </div>
        )
    }
}

export default NotesEditor;
