import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppStateType } from '../../redux/redux-store';
import { Post } from './Post/Post';
import { AddPostActionCreator, ProfileType, changeProfileTC, getProfileTC, setStatusTC, updateAddAvatarTC } from '../../redux/profile-reducer';
import { Redirect } from 'react-router-dom';
import ProfileStatus from './ProfileStatus';
import NewPostForm, { NewPostFormType } from './NewPost/NewPostForm';
import { reduxForm } from 'redux-form';
import { selctorIsInited, selctorPostPage, selctorProfile, selctorStatus } from '../../redux/profile-selector';
import { Field, Form, Formik } from 'formik';

export const Profile = () => {

  let postPage = useSelector<AppStateType, any>(selctorPostPage)
  let profile = useSelector<AppStateType, ProfileType>(selctorProfile)
  let isInited = useSelector<AppStateType, any>(selctorIsInited)
  let status = useSelector<AppStateType, any>(selctorStatus)
  let dispatch = useDispatch()
  const [changeState, SetChangeState] = useState(false)

  useEffect(() => {
    dispatch(getProfileTC())
    dispatch(setStatusTC(30596))
  }, [dispatch])

  if (isInited === false) {
    return <Redirect to={'/login'} />
  }

  const NewPostReduxForm = reduxForm<NewPostFormType>({ form: 'addMessage' })(NewPostForm)

  const onSubmit = (formDate: NewPostFormType) => {
    dispatch(AddPostActionCreator(formDate.message))
  }

  const onChangeHandler = () => {
    SetChangeState(!changeState)
  }

  const onChangeHandlerSave = (profile: any) => {

      // "aboutMe": 'Machete coder',
      // "contacts": {
      //     "facebook": null,
      //     "website": null,
      //     "vk": null,
      //     "twitter": null,
      //     "instagram": null,
      //     "youtube": null,
      //     "github": null,
      //     "mainLink": null
      // },
      // "lookingForAJob": false,
      // "lookingForAJobDescription": 'no',
      // "fullName": "Machete1",
      // "userId": 30596,
    console.log(profile)
    dispatch(changeProfileTC(profile))
    SetChangeState(!changeState)
  }

  const onChangeInputFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length) {
      dispatch(updateAddAvatarTC(e.currentTarget.files[0]))
    }
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
              <span>Avatar: {profile.photos.large !== null
                ? <PhotoAvatar src={profile.photos.large} />
                : <PhotoAvatar src='https://zornet.ru/_fr/19/4551480.png' />}</span>
              <input type="file" onChange={onChangeInputFile} />
              <ButtonChange onClick={onChangeHandler}>change info</ButtonChange>
              {changeState
                ? <>
                  <Formik initialValues={Object} onSubmit={(profile) => onChangeHandlerSave(profile)}>
                    <Form>
                      <label htmlFor="fullName">Full name:</label><Field component={'input'} name={'fullName'}/><br />
                      <label htmlFor="aboutMe">About me:</label><Field component={'input'} name={'aboutMe'} /><br />
                      <label htmlFor="lookingForAJob">Looking for a Job:</label><Field component={'select'}name={'lookingForAJob'}><option value='true'>yes</option><option value='false'>no</option></Field><br />
                      <label htmlFor="lookingForAJobDescription">looking for a job description:</label><Field component={'input'} name={'lookingForAJobDescription'} /><br />
                      <button type='submit'>Save</button>
                    </Form>
                  </Formik>

                  {/* <p>Web Site VK:</p><input type="text" name='vk' />
                  <p>Web Site Other:</p><input type="text" name='other' />
                  <button onClick={onChangeHandlerSave}>save</button> */}
                </>
                : <>
                  <span>Full name: {profile.fullName}</span>
                  <span>About me: {profile.aboutMe}</span>
                  <span>Looking for a Job: {profile.lookingForAJob}</span>
                  <span>looking for a job description: {profile.lookingForAJobDescription}</span>
                  {/* <span>Name: {profile.fullName}</span>
                  <span>Statys: {profile.lookingForAJobDescription}</span>
                  <span>Web Site VK: {profile.contacts.vk}</span>
                  <span>Web Site Other: {profile.contacts.github}</span> */}
                </>
              }

            </>
            : ''}
        </MyInfoBlock>
      </MyInfo>
      <MyPosts>
        {/* <NewPost dispatch={dispatch} /> */}

        <NewPostReduxForm onSubmit={onSubmit} />
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
const PhotoAvatar = styled.img`
  height: 50px;
  width: 50px;
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
const ButtonChange = styled.button`
  width: 100px;
  height: 50px;
`