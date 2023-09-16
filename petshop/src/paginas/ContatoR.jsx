import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const ContatoDetalhes = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleContact = () => {
        alert("Contato enviado!")
        return navigate("/")
    }

    return (
        <main>
            <h1 className="titulo-pagina">Contato Detalhes: {id}</h1>
            <button className="menu-item--entrar" onClick={handleContact}>Enviar Mensagem</button>
        </main>
    )
}

export default ContatoDetalhes

//rafce