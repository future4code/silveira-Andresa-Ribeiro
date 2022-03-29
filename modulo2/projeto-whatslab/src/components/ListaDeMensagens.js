import React from "react";
import styled from "styled-components";
import { MensagensContainer, Mensagem, MinhaMensagem, } from "./styled"

//Area para mudar posição quando escrever "Eu" em remetente.

class ListaDeMensagens extends React.Component {
    render() {
        return (
            <MensagensContainer>
                {this.props.mensagens &&
                this.props.mensagens.map((mensagem, index) => {
                    if (mensagem.remetenteValue.toLowerCase() === "eu") {
                        return (
                            <MinhaMensagem
                                key={index}
                                onDoubleClick={() => this.props.onDoubleClick(index)}
                            >
                                <strong>{mensagem.remetenteValue}: </strong>
                                {mensagem.mensagemValue}
                            </MinhaMensagem>
                        );
                    } else {
                        return (
                            <Mensagem
                                key={index}
                                onDoubleClick={() => this.props.onDoubleClick(index)}
                            >
                                <strong>{mensagem.remetenteValue}: </strong>
                                {mensagem.mensagemValue}
                            </Mensagem>
                        );
                    }
                })}
            </MensagensContainer>
        );
    }
}

export default ListaDeMensagens;