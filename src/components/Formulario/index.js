import "./Formulario.css"
import Campo from "../Campo"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import { useState } from "react"

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState("")
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem:imagem, 
            time:time
        })
        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    valor = {nome}
                    type = "text"
                    aoAlterado = {valor => setNome(valor)}
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" />
                <Campo
                    valor = {cargo}
                    type = "text"
                    aoAlterado = {valor => setCargo(valor)}
                    obrigatorio={true}
                    label="Cargo" 
                    placeholder="Digite seu cargo" />
                <Campo 
                    valor = {imagem}
                    type = "text"
                    aoAlterado = {valor => setImagem(valor)}
                    label="Imagem"
                    placeholder="Informe o endereço da imagem" />
                <ListaSuspensa
                    valor={time}
                    aoAlterado = {valor => setTime(valor)} 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times} />
                <Botao>
                    Criar card
                </Botao>
            </form>
            <form className="formulario" onSubmit={(evento) => {
                evento.preventDefault()
                props.aoCriarTime({ nome: nomeTime, cor: corTime })
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    type = "text"
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite o nome do time'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}/>
                <Campo
                    type = "color"
                    obrigatorio={true}
                    label='Cor' 
                    placeholder='Digite sua cor'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}/>
                <Botao>Criar novo time</Botao>
            </form>
        </section>
    )

}

export default Formulario
