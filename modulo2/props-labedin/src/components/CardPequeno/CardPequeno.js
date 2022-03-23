import React from 'react';
import styled from 'styled-components'

const ContainerPequeno = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 0px 20px;
    margin-bottom: 10px;
    height: 80px;
    background-color: white;

    img {
        width: 30px;
        margin-right: 10px;
        border-radius: 50%;
    }

    p {
        margin-right: 5px;
    }

    :hover {
            background-color: blanchedalmond;
            box-shadow: 6px 6px 10px 0px rgba(0,0,0,0.51);
            border: 1px solid brown;
    }
`

let CardPequeno = (props) => {
    return (
        <ContainerPequeno>
            <img src={props.icone} />
            <p><b>{props.email}</b></p>
            <p><b>{props.endereco}</b></p>
            <p>{props.conteudo}</p>
        </ContainerPequeno>
    )
}

export default CardPequeno;