import styled from 'styled-components';

const DialogsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: silver;
    color: white;
`


const DialogsMembersList = styled.div`
    & ul {
        list-style-type: none;
    }

    & a {
        color: green;
        text-decoration: none;
    }

    & .active {
        color: red;
    }
    
`

const DialogsMembersMessages = styled.div`

`


export const S = {
    DialogsMembersList,
    DialogsMembersMessages,
    DialogsWrapper
}