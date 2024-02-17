import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppStateType } from '../../../redux/redux-store';
import { VavbarFriendsType } from '../../../redux/state';
import { Friend } from './Friend/Friend';


export const Friends = () => {
    let friends = useSelector<AppStateType, any>(state => state.navbarFriends)
    return (
        <FriendsWrapper>
            <FriendsTitle>Friends</FriendsTitle>
            <FriendBlockWrap>
                <Friend navbarFriends={friends}/>
            </FriendBlockWrap>
        </FriendsWrapper>
    );
};


const FriendsWrapper = styled.div`

`

const FriendsTitle = styled.h2`
    text-align: center;
`

const FriendBlockWrap = styled.div`
    display: flex;
    justify-content: space-around;
`