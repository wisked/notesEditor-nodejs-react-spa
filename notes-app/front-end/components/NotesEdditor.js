import React, { PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import ColorPicker from './ColorPicker';

import '../styles/NoteEditor.less';

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
    handleColorChange() {
        this.setState({
            color
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

                <MuiThemeProvider>
                    <div>
                        <TextField
                            // hintText="Hint Text"
                            floatingLabelText="Note naame"
                            floatingLabelFixed={true}
                            value={this.state.title}
                            onChange={this.handleTitleChange.bind(this)}
                        />
                        <br />
                        <TextField
                            hintText="Type note text"
                            floatingLabelText="Input note text"
                            multiLine={true}
                            rows={2}
                            value={this.state.text}
                            onChange={this.handleTextChange.bind(this)}
                        />
                    </div>

                </MuiThemeProvider>
                {/* <textarea
                    placeholder="input text"
                    rows={5}
                    className="NoteEditor__text"
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}
                    /> */}
                <div className="NoteEditor__footer">
                <ColorPicker
                    value={this.state.color}
                    onChange={this.handleColorChange}
                />
                    <button
                        className="NoteEditor__button"
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
