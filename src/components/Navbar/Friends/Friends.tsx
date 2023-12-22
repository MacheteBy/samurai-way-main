import React from 'react';
import styled from 'styled-components';
import { VavbarFriendsType } from '../../../redux/state';
import { Friend } from './Friend/Friend';

type FriendsType = {
    navbarFriends: VavbarFriendsType,
}



export const Friends = (props: FriendsType) => {
    return (
        <FriendsWrapper>
            <FriendsTitle>Friends</FriendsTitle>
            <FriendBlockWrap>
                <Friend navbarFriends={props.navbarFriends}/>
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