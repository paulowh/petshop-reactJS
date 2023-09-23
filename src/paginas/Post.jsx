import React, {useState, useEffect} from "react";
import { busca } from "../api/api";
import { useParams, useNavigate } from "react-router-dom";
import '../assets/css/post.css'

const Post = () =>{
    
    const navigate = useNavigate()

    const {id} = useParams()

    const [post, setPost] = useState([])

    useEffect(()=>{
        busca(`/posts/${id}`, setPost)
        .catch(() => {
            navigate('/404')
        })
    }, {id})

    return(
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="cartao__titulo">{post.title}</h2>
                <h3 className="cartao-post_meta">{post.metadescription}</h3>
                <p className="cartao__texto">{post.body}</p>
            </article>
        </main>
    )
}

export default Post