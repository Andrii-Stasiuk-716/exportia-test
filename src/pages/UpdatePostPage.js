import React, { useState } from 'react';
import { usePostsSelector } from "customHooks/stateSelectors";
import { useDispatch } from 'react-redux';
import { postsActions } from "../slices/posts";
import { useHistory } from 'react-router-dom';




const UpdatePostPage = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const history = useHistory();

    const addPost = (e) => {
        e.preventDefault();
        if(title && body) {
            dispatch(postsActions.addPost({title,body}));
            history.push('/posts')
        };
    }

    return (
        <form className='myForm'>
            <h2>Create post</h2>
            <input type='text' placeholder='Title *' className='addPostInput' value={title} onChange={e => setTitle(e.target.value)} />
            <textarea cols='50' placeholder='Content *' className='addPostTA' value={body} onChange={e => setBody(e.target.value)} ></textarea>
            <button onClick={addPost} className='button submitBtn'>Add Post</button>
        </form>
    );
};

export default UpdatePostPage;