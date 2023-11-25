import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";
import "../components/textarea.css";

const FormPostAdmin = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState([]);
    const [metadescription, setMetadescription] = useState("");
    const [body, setBody] = useState("");
    const [categoria, setCategoria] = useState([]);

    const [categorias, setCategorias] = useState([]);

    const parametros = useParams();

    useEffect(() => {
        api.get("categorias/").then((resposta) => setCategorias(resposta.data))
    }, [])


    useEffect(() => {
        if (parametros.id) {
            api
                .get(`posts/${parametros.id}`)
                .then((resposta) => setTitle(resposta.data.title));
            api
                .get(`posts/${parametros.id}`)
                .then((resposta) => setMetadescription(resposta.data.metadescription));
            api
                .get(`posts/${parametros.id}`)
                .then((resposta) => setBody(resposta.data.body));
            api
                .get(`posts/${parametros.id}`)
                .then((resposta) => setCategoria(resposta.data.categoria));
        }
    }, [parametros]);

    const CadastrarPost = (evento) => {
        if (parametros.id) {
            api.put(`/posts/${parametros.id}`, {
                title: title,
                metadescription: metadescription,
                body: body,
                categoria: categoria
            }).then(() => {
                alert("Cadastro realizado com sucesso!!!")
                navigate("/admin/posts")
            })
        } else {
            api.post(`/posts`, {
                title: title,
                metadescription: metadescription,
                body: body,
                categoria: categoria
            }).then(() => {
                alert("Cadastro realizado com sucesso!!!")
                navigate("/admin/posts")
            })
        }
    }

    return (
        <>
            <main className="container flex flex--centro">
                <article className="cartao post">
                    <h2 className="titulo-pagina">Formulário de Posts</h2>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            flexGrow: 1,
                        }}
                    >
                        <Box sx={{ width: "100%" }}>
                            <form onSubmit={CadastrarPost} >
                                <TextField
                                    onChange={(evento) => setTitle(evento.target.value)}
                                    label="Título"
                                    variant="filled"
                                    fullWidth
                                    required
                                    margin="dense"
                                    value={title}
                                />
                                <TextField
                                    onChange={(evento) => setMetadescription(evento.target.value)}
                                    label="Subtítulo"
                                    variant="filled"
                                    fullWidth
                                    required
                                    margin="dense"
                                    value={metadescription}
                                />
                                <br />
                                <br />
                                <label className="" for="descricao">
                                    Descrição
                                </label>
                                <br />
                                <textarea
                                    className="textarea filled"
                                    name="descricao"
                                    id="descricao"
                                    placeholder="Descrição"
                                    rows="4"
                                    onChange={(evento) => setBody(evento.target.value)}
                                    value={body}
                                ></textarea>
                                <FormControl margin="dense" fullWidth>
                                    <InputLabel id="select-categoria">Categoria</InputLabel>
                                    <Select
                                        labelId="select-categoria"
                                        onChange={(evento) => setCategoria(evento.target.value)}
                                        value={categoria}
                                    >
                                        {categorias.map((categoria) => (
                                            <MenuItem key={categoria.id} value={categoria.id}>
                                                {categoria.nome}
                                            </MenuItem>
                                        ))}
                                    </Select>{" "}
                                </FormControl>

                                <br />

                                <Button
                                    sx={{ marginTop: 1 }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                >
                                    Salvar
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </article>
            </main>
        </>
    );
};

export default FormPostAdmin;
