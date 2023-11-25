import React, { useEffect, useState } from 'react'
import ListCatAdmin from './components/ListCatAdmin'
import { Link, useParams } from 'react-router-dom'
import { busca } from '../../api/api'
import { Button } from '@mui/material'

const CatAdmin = () => {
    const { id } = useParams()

    const [subCategoria, setSubCategorias] = useState([])

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubCategorias(categoria.subcategorias)
        })
    }, [id])

    return (
        <main>
            {/* <div className="container">
                <h2 className="titulo-pagina">Administração</h2>
            </div> */}

            <div className="container">
                <table className="tabela">
                    <thead>
                        <tr>
                            <th colSpan="3" className="tabela__coluna--g">
                                SubCategoria: <span className="cartao__titulo">id</span>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            {
                                subCategoria.map((subcategoria) => 
                                    <td className='tabela__coluna--m'
                                        key={subcategoria.id}>
                                        {subcategoria}
                                    </td>
                                )
                            }
                            <td>
                                <Link to={`/admin/sub/${id}`}>
                                    <Button 
                                        type='submit'
                                        variant='contained'
                                        fullWidth
                                    >
                                        Editar SubCategorias
                                    </Button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <ListCatAdmin />
        </main>
    )
}

export default CatAdmin

// rafce