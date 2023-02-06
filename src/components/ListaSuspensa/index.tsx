import "./ListaSuspensa.css"

interface ListaSuspensaProps {
    label: string,
    valor: string,
    obrigatorio: boolean,
    aoAlterado: (valor: string) => void,
    itens: string[]

}

const ListaSuspensa = (props: ListaSuspensaProps) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select 
                value={props.valor} 
                onChange={e =>props.aoAlterado(e.target.value)} 
                required={props.obrigatorio}
            >
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa