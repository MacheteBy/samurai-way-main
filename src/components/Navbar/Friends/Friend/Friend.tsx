import React from 'react';
import styled from 'styled-components';
import { VavbarFriendsType } from '../../../../redux/state';


type FriendType = {
    navbarFriends: VavbarFriendsType,
}



export const Friend = (props: FriendType) => {
    let FriendsMaping = props.navbarFriends.friends.map((el =>
        <FriendWrapper key={el.id}>
            <FriendImg src="https://img1.akspic.ru/crops/6/1/0/1/7/171016/171016-ikonka_cheloveka_pauka_v_instagrame-chelovek_pauk-yad-supergeroj-logo-1080x1920.jpg" alt="frien" />
            <FriendName>{el.name}</FriendName>
        </FriendWrapper>
    ))
    return (
        <>
            {FriendsMaping}
        </>
    );
};


const FriendWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const FriendImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`

const FriendName = styled.span`
    font-size: 12px;
`
