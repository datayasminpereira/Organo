import "./Banner.css"
import React from "react"

interface BannerProps {
    enderecoImagem: string,
    textoAlternativo?: string
}

const Banner = ({ enderecoImagem, textoAlternativo } : BannerProps) => {
    
    return (
        <header className="banner">
            {/* <img src="/images/banner.png" alt="Imagem do Banner da Organo"/> */}
            <img src={enderecoImagem} alt={textoAlternativo}/>
        </header>
        
    )

}

export default Banner