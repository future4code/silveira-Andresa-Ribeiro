import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
        id: Date.now(),
        texto: 'Estudar',
        completa: false
      },
      {
        id: Date.now(),
        texto: 'Almoçar',
        completa: true
      }
    ],

      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    window.localStorage.setItem("Tarefa", JSON.stringify(this.state.tarefas));
  };

  componentDidMount() {
    const stringTarefas = window.localStorage.getItem("Tarefa");
    if (stringTarefas) {
      const tarefa = JSON.parse(stringTarefas); //convertendo
      this.setState({ tarefas: tarefa }) //atualizando
    }
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  criaTarefa = () => {
    const novaTarefa = {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false 
      }

      const copiaDoEstado = [...this.state.tarefas]

      copiaDoEstado.push(novaTarefa)

      this.setState ({
        tarefas: copiaDoEstado
      })

      const stringTarefas = JSON.stringify(copiaDoEstado)
      window.localStorage.setItem("Tarefa", stringTarefas)

      this.setState({ inputValue: ""})
  }

  removerTarefas = (tarefasId) => {
    //apagar toda a lista
    const listaDeTarefas = this.state.tarefas.filter((tarefa) => {
      if (tarefasId !== tarefa.id) {
        return false
      } else {
        return true
      }
    })

    this.setState({tarefas: listaDeTarefas})
  }

    Crescente = () => {
      let tarefasCrescentes = [...this.state.tarefas]; 
  
      tarefasCrescentes.sort( function(a,b) {
        return a.texto.localeCompare(b.texto)
      })
  
      this.setState({tarefas: tarefasCrescentes}); 
    }
  
    Decrescente = () => {
      let tarefasDecrescentes = [...this.state.tarefas]; 
  
      tarefasDecrescentes.sort( function(a,b) {
        return (b.texto.localeCompare(a.texto))
      })
  
      this.setState({tarefas: tarefasDecrescentes}); 
    }


  selectTarefa = (id) => {
    const alteraTarefa = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        const mudancaEstado = {...tarefa, completa: !tarefa.completa}
        return mudancaEstado
      } else {
        return tarefa
      }
    })
    this.setState({
      tarefas: alteraTarefa
    })
  }

  onChangeFilter = (event) => {
    this.setState({
      filtro: event.target.value
    })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de Tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button className='botao-adicionar' onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
        <label className='text-tarefas'>Tarefas:</label>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>

      <div className='botoes-remover'>

        <button className='botao-remover' onClick={this.removerTarefas}>Remover todas as tarefas</button>

        <br/>

        <button className='botao-remover' onClick={this.Crescente}>Filtrar Alfabetica Crescente</button>
        
        <button className='botao-remover' onClick={this.Decrescente}>Filtrar Alfabetica Descrescente</button>
        </div>
      </div>
    )
  }
}

export default App
