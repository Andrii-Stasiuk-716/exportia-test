import React, { useState } from 'react';
import { usePostsSelector } from "customHooks/stateSelectors";
import { useDispatch } from 'react-redux';
import { postsActions } from "../slices/posts";
import { useHistory } from 'react-router-dom';
import { usePost } from 'customHooks/usePost';




const UpdatePostPage = () => {
    const dispatch = useDispatch();
    const { post } = usePost();
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const history = useHistory();

    const updatePost = (e) => {
        e.preventDefault();
        if(title && body) {
            dispatch(postsActions.updatePost({
                userId: post.userId,
                id: post.id,
                title,
                body
            }));
            history.push('/posts')
        };
    }

    return (
        <form className='myForm'>
            <h2>Update post</h2>
            <input type='text' placeholder='Title *' className='addPostInput' value={title} onChange={e => setTitle(e.target.value)} />
            <textarea cols='50' placeholder='Content *' className='addPostTA' value={body} onChange={e => setBody(e.target.value)} ></textarea>
            <button onClick={updatePost} className='button submitBtn'>Update Post</button>
        </form>
    );
};

export default UpdatePostPage;