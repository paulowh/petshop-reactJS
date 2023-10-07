import React from 'react'
import ListPost from './ListPost'
import { useParams } from 'react-router-dom'

const SubCategorias = () => {
    const {subcategoria} = useParams()

  return (
    <ListPost url={`/posts?subcategoria=${subcategoria}`} />
  )
}

export default SubCategorias