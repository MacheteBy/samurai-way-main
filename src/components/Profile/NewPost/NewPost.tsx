import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { AddPostActionCreator } from '../../../redux/profile-reducer';
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