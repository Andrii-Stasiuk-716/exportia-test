import React from 'react';

const AddPostPage = () => {

    return (
        <form className='myForm'>
            <h2>Create post</h2>
            <input type='text' placeholder='Title *' className='addPostInput'/>
            <textarea cols='50' placeholder='Content *' className='addPostTA'></textarea>
            <button className='button submitBtn'>Add Post</button>
        </form>
    );
};

export default AddPostPage;