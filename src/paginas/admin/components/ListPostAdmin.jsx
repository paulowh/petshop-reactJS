import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { api, busca } from "../../../api/api";
import { Link } from "react-router-dom";

const ListaPostAdmin = () => {
    const [posts, setPost] = useState([])
    useEffect(()=>{
        busca(`/posts`, setPost);
    })

    const excluir = (PostDel) => {
        api.delete(`posts/${PostDel.id}/`)
            .then(() => {
                const listPost = posts.filter((postFilter) => postFilter.id !== PostDel.id);
                setPost([...listPost])
            })
    }

    return (
        <>
            <div className="container">
                <section>
                    <table className="tabela">
                        <thead>
                            <tr>
                                <th className="tabela__coluna--p">Categoria</th>
                                <th className="tabela__coluna--m">Título</th>
                                <th className="tabela__coluna--m">Posts</th>
                                <th className="tabela__coluna--p tabela__alinhamento--direita">
                                    <Link to="/admin/posts/NovoPost">
                                        <Button type="submit" variant="contained" fullWidth>
                                            Novo Post
                                        </Button>
                                    </Link>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => (
                                <tr key={post.id}>
                                    <td>{post.categoria}</td>
                                    <td>
                                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                                    </td>
                                    <td>{post.metadescription}</td>
                                    <td>
                                        <Link to={`/admin/posts/${post.id}`}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="warning"
                                                align="right"
                                                sx={{ margin: "0.25rem 0" }}
                                                fullWidth
                                            >
                                                Editar
                                            </Button>
                                        </Link>
                                        <br />
                                        <Link to={`/admin/posts`}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="error"
                                                align="right"
                                                sx={{ margin: "0.25rem 0" }}
                                                onClick={() => excluir(post)}
                                                fullWidth
                                            >
                                                Excluir
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    );
};

export default ListaPostAdmin;

//rafce