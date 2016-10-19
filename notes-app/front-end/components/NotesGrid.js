import React, { PropTypes } from 'react'

import Masonry from 'react-masonry-component';

import Note from './Note';

class NotesGrid extends React.Component {

    render () {
        const mansoryOptions = {
            itemSelector: '.Note',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };
        return (
            <Masonry
                className='NotesGrid'
                options={mansoryOptions}
            >
                {
                    this.props.notes.map(note =>
                        <Note
                            key={note.id}
                            title={note.title}
                            onDelete={this.props.onNoteDelete}
                            color={note.color}
                        >
                            {note.text}
                        </Note>
                    )
                }
            </Masonry>
        )
    }
}

export default NotesGrid;
