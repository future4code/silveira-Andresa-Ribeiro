import React from 'react';
import styled from 'styled-components'

const ContainerGrande = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    background-color: white;

    :hover {
            background-color: blanchedalmond;
            box-shadow: 6px 6px 10px 0px rgba(0,0,0,0.51);
            border: 1px solid brown;
    }
`

const ImagemCardGrande = styled.img`
    width: 90px;
    margin-right: 10px;
    border-radius: 50%;
    padding-right: 10px;
`

const MeuNome = styled.h4`
    margin-bottom: 10px;
    padding-right: 50px;
    text-align: center;
    font-size: 20px;
`

const ContainerDentroGrande = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <ContainerGrande>
            <ImagemCardGrande src={ props.imagem } />
            <ContainerDentroGrande>
                <MeuNome>{ props.nome }</MeuNome>
                <p>{ props.descricao }</p>
            </ContainerDentroGrande>
        </ContainerGrande>
    )
}

export default CardGrande;