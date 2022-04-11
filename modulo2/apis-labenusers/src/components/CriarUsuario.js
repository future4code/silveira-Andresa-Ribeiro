import axios from "axios";
import styled from "styled-components";
import React, { Component } from 'react'

const ContainerCadastro = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 100px;
`

const ContainerCabecalho = styled.div`
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    color: white;
    font-family: 'Noto Sans', sans-serif;
    font-size: 30px;
    font-weight: bold;
    padding: 1px;
    text-align: center;
`

const Botao = styled.button`
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    border-radius: 8px;
    color: white;
    margin-left: 20px;
    padding: 4px;
    position: fixed;
    cursor: pointer;
    :hover {
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    position: fixed;
    }
    :active {
        color: white
    }
`

const BotaoLista = styled.button`
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    border-radius: 8px;
    color: white;
    padding: 4px;
    margin-top: 100px;
    margin-left: 45%;
    cursor: pointer;
    :hover {
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    
    }
    :active {
        color: white
    }
`

const Div = styled.div`
height:50px;
`

export default class CriarUsuario extends Component {
    render() {
        return (
            <Div>
                <ContainerCabecalho>
                    <p>Cadastro</p>
                </ContainerCabecalho>

                <ContainerCadastro>
                <label>
                    <b>Nome:</b>    <input placeholder="Nome" value={this.props.valueNome} onChange={this.props.onChangeName}/>
                </label>

                <label>
                    <b>E-mail:</b>  <input placeholder="E-mail" value={this.props.valueEmail} onChange={this.props.onChangeEmail}/>
                    
                    <Botao onClick={this.props.createUsers}>Enviar</Botao>
                </label>

                </ContainerCadastro>

                <BotaoLista onClick={this.props.trocartela}>Consultar Usuários</BotaoLista>

            </Div>
        )
    }
}