import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

type NewPostType = {
    addPost: (postMessage: string) => void;
}

export const NewPost = (props: NewPostType) => {
    let [inputValue, setInputTitle] = useState('')

    const newPostElement = (e:ChangeEvent<HTMLInputElement>) => {
        let newPostValue = e.currentTarget.value;
        setInputTitle(newPostValue)
    }

    const onClickhandler = () => {
        props.addPost(inputValue)
    }

    return (
        <NewPosts>
            <input onChange={newPostElement} type="text" />
            <button onClick={onClickhandler}>Send</button>
        </NewPosts>
    );
};




const NewPosts = styled.div`
    
`