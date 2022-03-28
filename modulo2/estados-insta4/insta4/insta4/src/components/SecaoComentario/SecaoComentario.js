import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		comentarioUsuario: ""
	}

	onChangeComentario = (event) => {
		console.log(event.target.value)
		this.setState ({
			comentarioUsuario: event.target.value
		})
	}

	onClickSalvar = () => {
		this.setState ({
		  salvado: !this.state.salvado
		})
	  }
	
	  onClickCompartilhar = () => {
		this.setState ({
		  compartilhar: !this.state.compartilhar
		})
	  }
	
	  aoCompartilharInsta = () => {
		console.log("Post compartilhado no Instagram!")
	  }
	  aoCompartilharFace = () => {
		console.log("Post compartilhado no Facebook!")
	  }
	  aoCompartilharTwitter = () => {
		console.log("Post compartilhado no Twitter!")
	  }

	render() {
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.comentarioUsuario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}
