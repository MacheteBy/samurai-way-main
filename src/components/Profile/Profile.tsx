import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppStateType } from '../../redux/redux-store';
import { NewPost } from './NewPost/NewPost';
import { Post } from './Post/Post';
import { AddPostActionCreator, ProfileType, getProfileTC, setStatusTC } from '../../redux/profile-reducer';
import { Redirect } from 'react-router-dom';
import ProfileStatus from './ProfileStatus';
import NewPostForm, { NewPostFormType } from './NewPost/NewPostForm';
import { reduxForm } from 'redux-form';

export const Profile = () => {

  let postPage = useSelector<AppStateType, any>(state => state.postPage)
  let profile = useSelector<AppStateType, ProfileType>(state => state.postPage.profile)
  let isInited = useSelector<AppStateType, any>(state => state.auth.isInited)
  let status = useSelector<AppStateType, any>(state => state.postPage.status)
  let dispatch = useDispatch()


  useEffect(() => {
    dispatch(getProfileTC())
    dispatch(setStatusTC(30596))
  }, [dispatch])

  if (isInited === false) {
    return <Redirect to={'/login'} />
  }

  const NewPostReduxForm = reduxForm<NewPostFormType>({form: 'addMessage'})(NewPostForm)

  const onSubmit = (formDate: NewPostFormType) => {
    dispatch(AddPostActionCreator(formDate.message))
  }

  return (
    <MainStyled>
      <MainImages></MainImages>
      <MyInfo>
        <Photo src='https://kidpassage.com/images/wtg/italiya/italiya-1_1308484043.jpg' />
        <ProfileStatus status={status} />
        <MyInfoBlock>
          {profile
            ? <>
              <span>Name: {profile.fullName}</span>
              <span>Statys: {profile.lookingForAJobDescription}</span>
              <span>Web Site VK: {profile.contacts.vk}</span>
              <span>Web Site Other: {profile.contacts.github}</span>
            </>
            : ''}
        </MyInfoBlock>
      </MyInfo>
      <MyPosts>
        {/* <NewPost dispatch={dispatch} /> */}
        <NewPostReduxForm onSubmit={onSubmit}/>
        <Post postPage={postPage} />
      </MyPosts>
    </MainStyled>
  );
};


const MainStyled = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #5f637c;
`

const MainImages = styled.div`
  
`

const MyInfo = styled.div`

`

const Photo = styled.img`
  height: 300px;
  width: 90vw;
`

const MyInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  color: white;
  padding: 10px 0px;
`

const MyPosts = styled.div`
  
`
