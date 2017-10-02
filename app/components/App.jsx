import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: 'Walk dog'
                },
                {
                    id: uuid.v4(),
                    task: 'Feed dog'
                }
            ]
        };
    }

    render() {
        const {notes} = this.state;

        return (
            <div>
                <button onClick={this.addNote}>+</button>
                <Notes notes={notes} onDelete={this.deleteNote}/>
            </div>
        );
    }

    addNote = () => {
        // Adds a new note by adding to the state
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'Pet dog'
            }])
        });
    }

    deleteNote = (id, e) => {
        // Delete a note by removing it from the state
        e.stopPropagation(); // stop from bubbling to edit

        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    }
}