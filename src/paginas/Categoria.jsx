import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias';
import ListPost from '../components/ListPost';


const Categoria = () => {
    const { id } = useParams()

    return (
        <main>
            <div className='container'>
                <h2 className='titulo-pagina'>Pet Notícias</h2>
            </div>
            <ListaCategorias />

            <Routes>
                <Route path={`/`} element={<ListPost url={`/posts?categoria=${id}`} />} />
            </Routes>


        </main>
    )
}

export default Categoria