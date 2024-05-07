import styled from "styled-components"

const Preloader = () => {
    return <ImgLoader src='https://i.pinimg.com/originals/25/ef/28/25ef280441ad6d3a5ccf89960b4e95eb.gif' alt='img'></ImgLoader>
}

const ImgLoader = styled.img`
    display: flex;
    margin: 0 auto;
    width: 70px;
    height: 70px;
`

export default Preloader