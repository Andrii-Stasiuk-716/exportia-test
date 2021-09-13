import React, { useState } from 'react';
import { usePostsSelector } from "customHooks/stateSelectors";




const AddPostPage = () => {
    const [value, setValue] = useState('');
    const [content, setContent] = useState('');
    const { list } = usePostsSelector();


    return (
        <form className='myForm'>
            <h2>Create post</h2>
            <input type='text' placeholder='Title *' className='addPostInput' onChange={e => setValue(e.target.value)} />
            <textarea cols='50' placeholder='Content *' className='addPostTA' onChange={e => setContent(e.target.value)} ></textarea>
            <button className='button submitBtn'>Add Post</button>
        </form>
    );
};

export default AddPostPage;