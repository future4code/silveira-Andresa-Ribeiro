import React from "react";
import styled from "styled-components";
import ListaDeMensagens from "./ListaDeMensagens";
import { RemetenteInput, MensagemInput, EnviarMensagem, Container } from "./styled"

//Enviar mensagem

class CriarMensagem extends React.Component {
    state = {
        remetente: "",
        mensagem: "",
        mensagens: [],
    };

//Nome do remetente

onChangeRemetente = (event) => {
    this.setState({ remetente: event.target.value});
};

//Mensagem

onChangeMensagem = (event) => {
    this.setState({ mensagem: event.target.value});
};

onClickEnviarMensagem = () => {
    if (this.state.user !== "" && this.state.mensagem !== "") {
        const novaMensagem = {
            remetenteValue: this.state.remetente,
            mensagemValue: this.state.mensagem,
        };
        const novaArray = [novaMensagem, ...this.state.mensagens];
        this.setState({ mensagens: novaArray});
        this.setState({ mensagem: "", remetente:"" }); //Area para resetar o campo mensagem e remetente
    } else {
        alert("Por favor, preencha todos os campos e tente novamente!");
    }
};
//Enviar apertando com o botão enter

enterEnviarMensagem = (event) => {
    if (event.key === "Enter") {
        this.onClickEnviarMensagem();
    }
};

//Deletar Mensagem quando clicar em cima dela

deletarMensagem = (index) => {
    if (window.confirm("Tem certeza que quer apagar esta mensagem?")) {
        const deletarMensagem = this.state.mensagens;
        deletarMensagem.splice(index, 1);
        this.setState({ mensagens: deletarMensagem });
    }
};

//Mudar a cor da borda do input quando selecionado

render() {
    return(
        <div>
{/* Chamar o ListaDeMensagens.js */}
            <ListaDeMensagens
            mensagens={this.state.mensagens}
            remetente={this.state.remetente}
            mensagem={this.state.mensagem}
            onDoubleClick={this.deletarMensagem}
            />

            <Container onKeyPress={this.enterEnviarMensagem}>
{/* Alterar campos e envio de mensagem */}
                <RemetenteInput
                    placeholder="Remetente"
                    onChange={this.onChangeRemetente}
                    value={this.state.remetente}
                    required
                />

                <MensagemInput
                    placeholder="Mensagem"
                    onChange={this.onChangeMensagem}
                    value={this.state.mensagem}
                    required
                />

                <EnviarMensagem onClick={this.onClickEnviarMensagem} type="submit">
                    Enviar
                </EnviarMensagem>
        </Container>
        </div>
    );
}

}

export default CriarMensagem;