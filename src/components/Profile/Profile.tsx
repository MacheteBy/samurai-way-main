import React from 'react';
import styled from 'styled-components';

export const Profile = () => {
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
            <NewPosts>
              <input type="text" />
              <button>Send</button>
            </NewPosts>
            <PostsList>
              <img src="" alt="" />
              <p>Post 1</p>
            </PostsList>
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
  width: 100vw;
`

const MyInfoBlock = styled.div`
  
`

const MyPosts = styled.div`
  
`

const NewPosts = styled.div`
  
`

const PostsList = styled.div`
  
`