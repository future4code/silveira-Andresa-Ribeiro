import styled from "styled-components";


export const Main = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.div`
    margin: 0;
`

export const Button1 = styled.div`
    padding-right: 82vw;
    padding-top: 1.5vh;
    &:hover {
        background-color: blue;
    }
`

export const Title = styled.form`
    display: flex;
    color: white;
    font-size: 75px;
    margin-top: 10vh;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: space-evenly;
    width: 25%;
    margin-top: 6vh;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 40%;
    }
`