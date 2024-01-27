import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { AddPostActionType } from '../../../redux/state';

type NewPostType = {
    dispatch: (action: AddPostActionType) => void;
}

export const NewPost = (props: NewPostType) => {
    let [inputValue, setInputTitle] = useState('')

    const newPostElement = (e:ChangeEvent<HTMLInputElement>) => {
        let newPostValue = e.currentTarget.value;
        setInputTitle(newPostValue)
    }

    const onClickhandler = () => {
        let action = {type: 'ADD-POST', postMessage: inputValue} as const
        console.log(action)
        console.log(props)
        props.dispatch(action)
        setInputTitle('')
    }

    return (
        <NewPosts>
            <input value={inputValue} onChange={newPostElement} type="text" />
            <button onClick={onClickhandler}>Send</button>
        </NewPosts>
    );
};




const NewPosts = styled.div`
    
`