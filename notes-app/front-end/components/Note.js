import React, { PropTypes } from 'react'

import '../styles/Note.less';

class Note extends React.Component {
    render () {
        const style = {
         backgroundColor: this.props.color,
            border:' 1px solid black'

};
        return (
            <div className="Note" style={style}>
                <span className="note__del-icon" onClick={this.props.onDelete}>x</span>
                {
                    this.props.title ?
                        <h4 className="Note__title">{this.props.title}</h4>
                        :
                        null
                }
                <div className="Note__text">{this.props.children}</div>
            </div>
        )
    }
}

export default Note;
