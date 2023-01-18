import "./Time.css"
import Colaborador from "../Colaborador"

import hexToRgba from "hex-to-rgba"

const Time = (props) => {

    const css = { backgroundImage: "url(/images/fundo.png)", backgroundColor: hexToRgba(props.cor, 0.6) }

    return (
        (props.colaboradores.length > 0) ?
            <section className="time" style={css}>
                <input value={props.cor} onChange={e => props.mudarCor(e.target.value, props.id)} type="color" className="input-cor"/>
                <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
                <div className="colaboradores">
                    {props.colaboradores.map(colaborador =>  {
                            return (
                                <Colaborador 
                                    id = {colaborador.id}
                                    key={colaborador.nome} 
                                    favorito = {colaborador.favorito}
                                    nome={colaborador.nome} 
                                    cargo={colaborador.cargo} 
                                    imagem={colaborador.imagem} 
                                    corDeFundo={props.cor} 
                                    aoDeletar={props.aoDeletar}
                                    aoFavoritar={props.aoFavoritar}/>
                            )
                        }
                    )}
                </div>
            </section>
        : ""
    )

}

export default Time