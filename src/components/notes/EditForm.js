import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNote } from '../../store/actions/noteActions';
import useInput from '../../customhook/useInput';
import { useHistory } from 'react-router-dom';

const EditForm = () => {
    const note = useSelector((state) => state.note);
    console.log('edit Form', note);
    const [title, bindTitle, resetTitle] = useInput(note.title);
    const [content, bindContent, resetContent] = useInput(note.content);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateNote({ id: note.id, title, content }));
        console.log({ title, content });
        resetTitle();
        resetContent();
        history.push('/');
    };

    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">New Note</h5>
                <div>
                    <div className="input-field ">
                        <input id="note_title" type="text" className="validate" {...bindTitle} />
                        <label htmlFor="note_title" className="active">
                            Note Title
                        </label>
                    </div>
                </div>
                <div className="input-field">
                    <label htmlFor="note_content" className="active">
                        Note Content
                    </label>
                    <textarea id="note_content" className="materialize-textarea" {...bindContent} />
                </div>
                <button className="btn green">Update</button>
            </form>
        </div>
    );
};

export default EditForm;
