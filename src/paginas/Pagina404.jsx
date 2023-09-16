import React from "react";
import '../assets/css/404.css';
import imagem from '../assets/img/catiorrinho404.svg'


const Pagina404 = () => {
    return (
        <main className="container flex flex--centro flex--coluna">
            <img className="catiorrinho-imagem" src={imagem} alt="Ilustração Catiorinho" />
            <p className="naoencontrado-texto">
                Au, au, foi mal
            </p>
            <p className="naoencontrado-texto">
                Pagina não encontrada
            </p>
        </main>
    )
}

export default Pagina404