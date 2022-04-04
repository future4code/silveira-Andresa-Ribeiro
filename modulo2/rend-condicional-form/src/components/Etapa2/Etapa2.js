import React from "react";
import Perguntas from "./Perguntas/PerguntaFechada";

export default function InfoEnsinoSuperior() {
    return (
        <div>
            <h2>ETAPA 2- INFORMAÇÕES DO ENSINO SUPERIOR</h2>
            <div className="perguntas2">
            <Perguntas pergunta={"5. Qual curso?"} />
            <Perguntas pergunta={"6. Qual a unidade de ensino?"} />
            </div>
        </div>
    )
}