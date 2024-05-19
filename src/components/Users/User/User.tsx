import styled from 'styled-components';
import { followAC, followTC, getUsersAC, getUsersTC, setCurrentPageAC, setIsFetchingAC, toggleFollowingInProgress, unfollowAC, unfollowTC } from '../../../redux/users-reducer';
import { useEffect } from 'react';
import { socialAPI } from '../../../api/social-api';
import { AppStateType } from '../../../redux/redux-store';
import { useSelector } from 'react-redux';
import { selectorCurrentPage, selectorFollowingProgress } from '../../../redux/users-selectors';


type UserPropsType = {
    usersPage: any
    pageSize: any
    totalCount: any
    dispatch: (action: any) => void;
}

const User = (props: UserPropsType) => {
    let currentPage = useSelector<AppStateType, any>(selectorCurrentPage)
    let followingInProgress = useSelector<AppStateType, any>(selectorFollowingProgress)
    console.log(props.usersPage)
    useEffect(() => {
        props.dispatch(getUsersTC(currentPage, props.pageSize))
    }, [currentPage])

    const onClickFollow = (userId: number) => {
       
        props.dispatch(followTC(userId))
    }

    const onClickUnfollow = (userId: number) => {
      
        props.dispatch(unfollowTC(userId))
    }


    const UsersList = props.usersPage.map((el: any) =>
        <UsersWrapper key={el.id}>
            <UsersPreview>
                <UsersImg src="https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296367166243426.png" alt="img" />
                {el.followed
                    ? <ButtonSub onClick={() => onClickUnfollow(el.id)}
                        disabled={followingInProgress.some((id: number) => id === el.id)}>Unfollow</ButtonSub>
                    : <ButtonSub onClick={() => onClickFollow(el.id)}
                        disabled={followingInProgress.some((id: number) => id === el.id)}>Follow</ButtonSub>}
            </UsersPreview>
            <UsersCard>
                <UsersCardInfo>
                    <h2>{el.name}</h2>
                    <span>{el.status}</span>
                </UsersCardInfo>
                {/* <UsersCardLocation>
                    <h3>{el.location.country}</h3>
                    <h4>{el.location.city}</h4>
                </UsersCardLocation> */}
            </UsersCard>
        </UsersWrapper>
    )


    let pageCount = Math.ceil(25 / props.pageSize)
    const PageList = []
    for (let i = 1; i <= pageCount; i++) {
        PageList.push(i)
    }
    const styleSpan = {
        fontWeight: 'bold',
        fontSize: '25px'
    }

    const onClickHandler = (p: number) => {
        props.dispatch(setCurrentPageAC(p))
    }

    return (
        <>  <SpanWrapper>
            {PageList.map((p) => {
                return <div key={p}>{currentPage === p
                    ? <SpanButton key={p} style={styleSpan} onClick={() => { onClickHandler(p) }}>{p}</SpanButton>
                    : <SpanButton key={p} onClick={() => { onClickHandler(p) }}>{p}</SpanButton>}</div>
            }
            )}
        </SpanWrapper>
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
const SpanWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 10px 10px 0;
`

const SpanButton = styled.span`
    font-size: 20px
`