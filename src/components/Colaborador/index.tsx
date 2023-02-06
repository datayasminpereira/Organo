import "./Colaborador.css"
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from "react-icons/ai"
import { IColaborador } from "../../shared/interfaces/IColaborador"

interface ColaboradorProps {
    id: IColaborador["id"],
    nome: IColaborador["nome"],
    cargo: IColaborador["cargo"], 
    imagem: IColaborador["imagem"],
    favorito: IColaborador["favorito"],
    corDeFundo: string,
    aoFavoritar: (id: string) => void,
    aoDeletar: (id: string) => void,
}

const Colaborador = ({id, nome, cargo, imagem, favorito, corDeFundo, aoFavoritar, aoDeletar}: ColaboradorProps) => {

    return (
        <article className="colaborador">
            <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(id)}></AiFillCloseCircle>
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className="favoritar">
                    {favorito ?
                        <AiFillHeart size={25} color="ff0000" onClick={() => aoFavoritar(id)}/> : 
                        <AiOutlineHeart size={25} onClick={() => aoFavoritar(id)} />}
                </div>
            </div>
        </article>
    )
}

export default Colaborador