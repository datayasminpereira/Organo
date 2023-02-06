import "./Time.css"
import React from "react"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"
import { IColaborador } from "../../shared/interfaces/IColaborador"

interface TimeProps {
    id: string,
    cor: string,
    nome: string,
    colaboradores: IColaborador[], // array de objetos IColaboradores 
    mudarCor: (cor: string, id: string) => void,
    aoFavoritar: (id: string) => void,
    aoDeletar: (id: string) => void
}


const Time = (props: TimeProps) => {

    const css = { backgroundImage: "url(/images/fundo.png)", backgroundColor: hexToRgba(props.cor, 0.6) }

    return (
        (props.colaboradores.length > 0) ?
            <section className="time" style={css}>
                <input value={props.cor} onChange={e  => props.mudarCor(e.target.value, props.id)} type="color" className="input-cor"/>
                <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
                <div className="colaboradores">
                    {props.colaboradores.map(colaborador =>  {
                            return (
                                <Colaborador 
                                    key={colaborador.nome} 

                                    id = {colaborador.id}
                                    nome={colaborador.nome} 
                                    cargo={colaborador.cargo} 
                                    imagem={colaborador.imagem} 
                                    favorito = {colaborador.favorito}

                                    corDeFundo={props.cor} 
                                    aoDeletar={props.aoDeletar}
                                    aoFavoritar={props.aoFavoritar}/>
                            )
                        }
                    )}
                </div>
            </section>
        : <React.Fragment></React.Fragment>
    )

}

export default Time