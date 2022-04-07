import styled from "styled-components";
import React, {Component} from "react";

const ContainerPesquisa = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 80px;
`

const ContainerCabecalho = styled.div`
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    color: white;
    font-family: 'Noto Sans', sans-serif;
    font-size: 28px;
    font-weight: bold;
    padding: 1px;
    text-align: center;
`

const ContainerLista = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: top;
    margin-top: 15px;
    background-color: whitesmoke;
    padding: 150px;
`

const Botao = styled.button`
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    border-radius: 8px;
    color: white;
    margin-top: 30px;
    margin-left: 45%;
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

const BotaoEnviar = styled.button`
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    border-radius: 8px;
    color: white;
    position: fixed;
    padding: 4px;
    margin-left: 10px;
    cursor: pointer;
    :hover {
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    position: fixed;
    }
    :active {
        color: white
    }
`

const Div = styled.div`
    height:50px;
`

export default class Playlist extends Component {
    render() {
        return (
            <Div>
                <ContainerCabecalho>
                    <p>Buscar Playlist</p>
                </ContainerCabecalho>

                <ContainerPesquisa>
                    <Div>
                        <input
                            placeholder="Nome"
                            onChange={this.props.onChangeBusca}
                            value={this.props.valueBusca} />

                            <BotaoEnviar onClick={this.props.filtrarMusicas}>Enviar</BotaoEnviar>
                    </Div>

                    <ContainerLista>{this.props.playls}</ContainerLista>
                    
                </ContainerPesquisa>

                <Botao onClick={this.props.irparahome}>Voltar para a Página Inicial</Botao>
            </Div>
        )
    }
}