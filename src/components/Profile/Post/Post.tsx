import React from 'react';
import styled from 'styled-components';
import { PostPageType } from '../../../redux/state';

type PostType = {
    postPage: PostPageType,
}

export const Post = (props: PostType) => {
    const PostElement = props.postPage.post.map((el => 
        <PostsList key={el.id}>
            <PostImg src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png" alt="icon" />
            <PostText>{el.postText}</PostText>
            <PostLike>{el.like}</PostLike>
        </PostsList>
    ))
    return (
        <>
            {PostElement}
        </>  
    );
};


const PostsList = styled.div`
    display: flex;
    gap: 10px;
`

const PostImg = styled.img`
    width: 70px;
    border-radius: 50%;
    border: 2px solid black;
    margin: 6px;
`

const PostText = styled.p`
    color: white;
`

const PostLike = styled.p`
    color: #c50000;
    font-size: 20px;
`