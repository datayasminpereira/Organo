import "./Colaborador.css"
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from "react-icons/ai"

const Colaborador = (props) => {

    return (
        <article className="colaborador">
            <AiFillCloseCircle size={25} className="deletar" onClick={() => props.aoDeletar(props.id)}></AiFillCloseCircle>
            <div className="cabecalho" style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
                <div className="favoritar">
                    {props.favorito ?
                        <AiFillHeart size={25} color="ff0000" onClick={() => props.aoFavoritar(props.id)}/> : 
                        <AiOutlineHeart size={25} onClick={() => props.aoFavoritar(props.id)} />}
                </div>
            </div>
        </article>
    )
}

export default Colaborador