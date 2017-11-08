import React from 'react';
import Note from './Note';
import Editable from './Editable';

export default ({
    notes,
    onNoteClick=() => {}, onEdit=() => {}, onDelete=() => {}
}) => (
    <ul className='notes'>{notes.map(({id, editing, task}) => 
        <li key={id}>
            <Note className='note' onClick={onNoteClick.bind(null, id)}>
                <Editable
                    className='editable'
                    editing={editing}
                    value={task}
                    onEdit={onEdit.bind(null, id)}
                />
                <button className='delete' onClick={onDelete.bind(null, id)}><i className='trash icon'></i></button>
                <div className='lane-edit'>
                    <button onClick={onNoteClick.bind(null, id)}><i className='write icon'></i></button>
                </div>
            </Note>
        </li>
    )}</ul>
)