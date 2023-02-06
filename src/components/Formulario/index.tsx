import "./Formulario.css"
import Campo from "../Campo"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import { useState } from "react"
import { IColaborador } from "../../shared/interfaces/IColaborador"
import { v4 as uuidv4 } from 'uuid';

interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
    times: string[],
    aoCriarTime: (nome: string, cor: string) => void
}

const Formulario = (props: FormularioProps) => {

    type Teste = {
        nome: string,
        cor: string
      }
    const id = uuidv4()
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState("")
    const [nomeTime, setNomeTime] = useState<Teste["nome"]>('')
    const [corTime, setCorTime] = useState<Teste["cor"]>('')

    const aoSalvar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.aoColaboradorCadastrado({
            id,
            nome,
            cargo,
            imagem, 
            time
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
                props.aoCriarTime( nomeTime,  corTime )
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
