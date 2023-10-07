import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias';
import ListPost from '../components/ListPost';
import { busca } from '../api/api';
import SubCategorias from '../components/SubCategorias';


const Categoria = () => {
    const { id, subcategoria } = useParams()
    
    const [subcategorias, setSubCategorias] = useState([])

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubCategorias(categoria.subcategorias)
        })
    }, [id])

    return (
        <main>
            <div className='container'>
                <h2 className='titulo-pagina'>Pet Notícias</h2>
            </div>
            <ListaCategorias />

            <ul className="lista-categorias container flex">
                {
                    subcategorias.map((subcategoria) => (
                        <Link to={`/categoria/${id}/${subcategoria}`}>
                            <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}>
                                {subcategoria}
                            </li>
                        </Link>
                    ))
                }
            </ul>

            <Routes>
                {subcategoria != null &&
                    <Route path={`/`} element={<SubCategorias />} />
                }
                <Route path={`/`} element={<ListPost url={`/posts?categoria=${id}`} />} />
            </Routes>


        </main>
    )
}

export default Categoria