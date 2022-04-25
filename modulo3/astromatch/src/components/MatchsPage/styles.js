import styled from "styled-components";

export const ContainerPage = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`

export const ContainerMatches = styled.div `
    border: 2px solid pink;
    width: 400px;
    height: 600px;
    border-radius: 7px;
    box-shadow: 1px 1px 6px silver;
    background-color: ghostwhite;
    overflow: auto;
`

export const HeaderApp = styled.div `
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 60px;
    border-bottom: 1px solid silver;
    padding: 0px 2px;

    img {
        height: 100%;
    }
`

export const ContainerList = styled.div `

`

export const MatchesList = styled.ul `
    transition: all 1s;

    :hover {
        background-image: linear-gradient(45deg, #fad0c4 0%, #ff9a9e 99%, #ff9a9e 100%);    }
`

export const PersonMatch = styled.li `
    display: flex;
    position: relative;
    height: 50px;
    display: flex;
    list-style: none;
    width: 100%;
    cursor: pointer;
`

export const PersonImage = styled.img `
    height: 100%;
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
`

export const HomeImg = styled.img`
    transition: all 300ms;
    width: 45px;
    cursor: pointer;
    padding: 3px 0px;

    :hover {
        transform: scale(0.9);
    }

    :active {
        position: relative;
        top: 1px;
    }
`

export const NoMatches = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    font-weight: bold;
    text-align: center;
`

export const SemMatches = styled.img `
    width: 50%;
`