import axios from "axios";
import styled from "styled-components";
import React, { Component } from 'react'

const Tela = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Botao = styled.button`
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    border-radius: 10px;
    color: white;
    :hover {
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    }

    :before {
    content: '';
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}
    :active {
        color: white
    }
    :active:after {
    background: transparent;
    }   
    :hover:before {
    opacity: 1;
}
    :after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

`

const Div = styled.div`
`

export default class Usuarios extends Component {
    render() {
        return (
            <Tela>
                <Botao onClick={this.props.irparahome}>Página Inicial</Botao>
                {this.props.users}
                <Div>
                    <p>Pesquisar Usuários:</p>
                    <input
                        placeholder="Nome"
                        onChange={this.props.onChangeBusca}
                        value={this.props.valueBusca} />
                    <Botao onClick={this.props.filtrarUsers}>Pesquisar</Botao>

                </Div>

            </Tela>
        )
    }
}