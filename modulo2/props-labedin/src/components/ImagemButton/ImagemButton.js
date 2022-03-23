import React from 'react';
import styled from 'styled-components';

const ContainerImagemButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 10px;
    margin: 10px auto;
    background-color: white;
    font-weight: bolder;

    :hover {
            background-color: blanchedalmond;
            box-shadow: 6px 6px 10px 0px rgba(0,0,0,0.51);
            border: 1px solid brown;
    }

    a {
        text-decoration: none;
        color: black;
    }
`

const Imagem = styled.img`
    width: 30px;
    margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <ContainerImagemButton>
            <Imagem src={ props.imagem } />
            <a href={props.link}><p>{ props.texto }</p></a>
        </ContainerImagemButton>

    )
}

export default ImagemButton;