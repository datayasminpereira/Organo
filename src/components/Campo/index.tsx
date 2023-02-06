import "./Campo.css"

interface CampoProps {
    type: string,
    placeholder: string,
    label: string,
    valor: string, 
    obrigatorio?: boolean,
    aoAlterado: (valor: string) => void
}


const Campo = ({ type, placeholder, label, valor, obrigatorio, aoAlterado }: CampoProps) => {

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholder}>
            </input>
        </div>
    )
}

export default Campo