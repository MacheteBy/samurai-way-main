import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppStateType } from '../../redux/redux-store';
import { NewPost } from './NewPost/NewPost';
import { Post } from './Post/Post';

export const Profile = () => {

  let postPage = useSelector<AppStateType, any>(state => state.postPage)
  let dispatch = useDispatch()

    return (
        <MainStyled>
          <MainImages></MainImages>
          <MyInfo>
            <Photo src='https://italiaciao.ru/wp-content/uploads/2018/02/%D0%B3%D0%B0%D1%80%D0%B4%D0%B01.jpg'/>
            <MyInfoBlock>
              <span>Date of Birth: 18 January</span>
              <span>City: Mogilev</span>
              <span>Education: BRU</span>
              <span>Web Site: https://instagram.com/v_marchenkov</span>
            </MyInfoBlock>
          </MyInfo>
          <MyPosts>
            <NewPost dispatch={dispatch}/>
            <Post postPage={postPage}/>
          </MyPosts>
        </MainStyled>
    );
};


const MainStyled = styled.section`
grid-area: main;
  background-color: #223fe7;
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
  
`

const MyPosts = styled.div`
  
`
