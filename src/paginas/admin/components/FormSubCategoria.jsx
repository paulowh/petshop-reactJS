import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../../api/api'

const FormSubCategoria = () => {
    
    const [nomeCategoria, setNomeCategoria] = useState([])
    const [subCategoria1, setSubCategoria1] = useState([])
    const [subCategoria2, setSubCategoria2] = useState([])
    
    const parametros = useParams()
    useEffect(() => {
        if(parametros.id){
            api.get(`categorias/${parametros.id}`)
                .then((resposta) => {
                    setNomeCategoria(resposta.data.nome)
                })
        }
    })

    const CadCategoria = (evento) =>{
        evento.preventDefault()

        if(parametros.id){
            api.put(`/categorias/${parametros.id}/`, {
                id: nomeCategoria,
                nome: nomeCategoria,
                subcategorias: [subCategoria1, subCategoria2]
            })
        }
    }

  return (
    <main className="container flex flex--centro">
            <article className='catao post'>
                <h3 className='titulo-pagina'>Categoria: {parametros.id} / Subcategorias: </h3>
      
                <form onSubmit={CadCategoria}>
                    <input
                        type="hidden"
                        value={nomeCategoria}
                        onRelease={(evento) => setNomeCategoria(evento.target.value)}
                        id="outlined-basic"
                    />
                    <br />
                    <TextField
                        value={subCategoria1}
                        id="outlined-basic"
                        label="Subcategoria 1"
                        variant="filled"
                        fullWidth
                        required
                        onChange={(evento) => setSubCategoria1(evento.target.value)}

                    />
                    <br />
                    <TextField
                        value={subCategoria2}
                        id="outlined-basic"
                        label="Subcategoria 2"
                        variant="filled"
                        fullWidth
                        sx={{ marginTop: 2 }}
                        onChange={(evento) => setSubCategoria2(evento.target.value)}
                    />
                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ marginTop: 2 }}
                        fullWidth
                    >
                        Salvar
                    </Button>
                </form>
            </article>
        </main>
  )
}

export default FormSubCategoria