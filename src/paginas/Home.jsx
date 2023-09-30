import React from "react";
import ListPost from "../components/ListPost";
import ListaCategorias from "../components/ListaCategorias";

const Home = () => {
    return (
        <main className="container">
            <div>
                <h2 className="titulo-pagina">Pet notícias</h2>
            </div>
            {/* <section className="container flex flex--centro">
                <article className="cartao post">
                    <h2 className="cartao__titulo">Banho no cão</h2>
                    <p className="cartao__texto">Banhos regulares mantém os pelos e pele de seu cachorro
                        limpa, renovada e saudável. O processo de ensaboar e escovar remove
                        resíduos de pelos e peles que já estão mortas, providenciando um maior
                        respiro da pele de seu cachorro</p>
                </article>
            </section> */}
            <ListaCategorias />
            <ListPost url={'/posts/'} />
        </main>
    )
}

export default Home