import React, { useEffect, useState } from 'react'
import { api, busca } from '../../../api/api'
import { Link } from 'react-router-dom'
import '../components/tabela.css'
import { Button } from '@mui/material'

const ListCatAdmin = () => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        busca(`/categorias`, setCategorias)
    }, [])

    const excluir = (CategoriaDel) => {
        api.delete(`categorias/${CategoriaDel.id}/`)
            .then(() => {
                const listaCategorias = categorias.filter(categoria => categoria.id !== CategoriaDel.id)
                setCategorias([...listaCategorias])
            })
    }

    return (
        <section className="container">
            <table className="tabela">
                <thead>
                    <tr>
                        <th className="tabela__coluna--g">Categoria</th>
                        <th colSpan="3" className="tabela__coluna--p tabela__alinhamento--direita">
                            <Link to="/admin/NovaCategoria">
                                <Button
                                    variant="contained"
                                    type='submit'
                                    fullWidth
                                    sx={{ marginTop: 1 }}
                                >
                                    Nova Categoria
                                </Button>
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody >
                    {
                        categorias.map((categoria) => (
                            <tr key={categoria.id}>
                                <td className="tabela__coluna--m">
                                    <Link
                                        to={`/categoria/${categoria.id}`}>{categoria.nome}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={ `/admin/EditarCategoria/${categoria.id}` }>
                                        <Button
                                            variant='contained'
                                            type='submit'
                                            color='warning'
                                        >
                                            Editar
                                        </Button>
                                    </Link>
                                    
                                </td>
                                <td>
                                    <Link to={'/admin'}>
                                        <Button
                                            variant='contained'
                                            type='submit'
                                            color='error'

                                            onClick={() => excluir(categoria)}
                                        >
                                            Excluir
                                        </Button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/admin/categorias/${categoria.id}`}>
                                    <Button
                                            variant='outlined'
                                            type='submit'
                                            color='primary'
                                        >
                                            SubCategoria
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}

export default ListCatAdmin