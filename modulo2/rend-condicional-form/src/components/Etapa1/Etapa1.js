import React from "react";
import PerguntaAberta from "./Perguntas/PerguntaAberta";
import PerguntaOpcoes from "./Perguntas/PerguntaOpcoes";

class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <div className="perguntas1">
        <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
        <PerguntaAberta pergunta={"2. Qual sua idade?"} />
        <PerguntaAberta pergunta={"3. Qual seu email?"} />
        <PerguntaOpcoes
          pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[ 
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
        />
        </div>
      </div>
    );
  }
}

export default Etapa1;