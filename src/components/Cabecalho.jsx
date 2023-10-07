import React from "react";
import '../assets/css/components/cabecalho.css'
import imagem from '../assets/img/catiorrinho.svg'
import { Link } from "react-router-dom";

const Cabecalho = () => {
    return (
        <header className="cabecalho container">
            <div className="menu-hamburguinho">
                <span className="menu-hamburguinho__icone"></span>
            </div>
            <div className="cabecalho-container">
                <a href="/" className="flex--centro">
                    <img className="cabecalho__logo" src={imagem} alt="Logo Catiorrinho"/>
                    <h1 className="cabecalho__titulo">PetShop</h1>
                </a>
            </div>
            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    <li><Link to="/admin" className="menu-item menu-item--entrar">Admin</Link></li>
                    <li><Link to="#" className="menu-item">Produtos</Link></li>
                    <li><Link to="/" className="menu-item">Blog</Link></li>
                    <li><Link to="/sobre" className="menu-item">Sobre</Link></li>
                    {/* serve como exemplo */}
                    <li><Link to="/contato/1" className="menu-item">Contato</Link></li>
                    {/* <li><Link to="/contato/2" className="menu-item">Contato 2</Link></li>
                    <li><Link to="/contato/3" className="menu-item">Contato 3</Link></li> */}
                </ul>
            </nav>
            <div className="menu-cabecalho-background"></div>
        </header>
    )
}

export default Cabecalho