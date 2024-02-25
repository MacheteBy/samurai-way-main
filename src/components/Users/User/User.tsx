import React from 'react';
import styled from 'styled-components';
import { dispatchType } from '../../../redux/state';
import { followAC, unfollowAC } from '../../../redux/users-reducer';

type UserPropsType = {
    postPage: any
    dispatch: (action: any) => void;
}

const User = (props: UserPropsType) => {

    const onClickFollow = (userId: any) => {
        props.dispatch(followAC(userId))
    }

    const onClickUnfollow = (userId: any) => {
        props.dispatch(unfollowAC(userId))
    }

    const UsersList = props.postPage.users.map((el: any) => 
        <UsersWrapper key={el.id}>
            <UsersPreview>
                <UsersImg src="https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296367166243426.png" alt="img" />
                {el.followed === true 
                ? <ButtonSub onClick={() => onClickUnfollow(el.id)}>Follow</ButtonSub> 
                : <ButtonSub onClick={() => onClickFollow(el.id)}>Unfollow</ButtonSub>}
            </UsersPreview>
            <UsersCard>
                <UsersCardInfo>
                    <h2>{el.fullName}</h2>
                    <span>{el.status}</span>
                </UsersCardInfo>
                <UsersCardLocation>
                    <h3>{el.location.country}</h3>
                    <h4>{el.location.city}</h4>
                </UsersCardLocation>
            </UsersCard>
        </UsersWrapper>
    )
    return (
        <>
        {UsersList}
        </>
    );
};

export default User;

const UsersWrapper = styled.div`
    display: flex;
    border: 1px solid black;
    border-radius: 20px;
    max-width: 50%;
    margin: 0 auto;
    padding: 20px;
    margin-bottom: 10px;
`

const UsersPreview = styled.div`
    display: flex;
    flex-direction: column;
`

const UsersCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
`

const UsersCardInfo = styled.div`
    
`

const UsersCardLocation = styled.div`

`

const UsersImg = styled.img`
    width: 100px;
    height: 100px;
`

const ButtonSub = styled.button`
    
`