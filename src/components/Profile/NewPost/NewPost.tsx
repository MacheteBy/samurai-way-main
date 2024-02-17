import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AddMessageActionCreator } from '../../../redux/dialogs-reducer';
import { AddPostActionCreator } from '../../../redux/profile-reducer';
import { AppStateType } from '../../../redux/redux-store';
import { dispatchType } from '../../../redux/state';

type NewPostType = {
    dispatch: (action: dispatchType) => void;
}



export const NewPost = (props: NewPostType) => {
    let [inputValue, setInputTitle] = useState('')

    const newPostElement = (e:ChangeEvent<HTMLInputElement>) => {
        let newPostValue = e.currentTarget.value;
        setInputTitle(newPostValue)
    }

    const onClickhandler = () => {
        props.dispatch(AddPostActionCreator(inputValue))
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