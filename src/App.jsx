// Comece criando a estrutura da seção de comentários;
// Crie dois estados para controlar os inputs de autor e conteúdo do comentário;
// Adicione a função que irá salvar o comentário no evento onSubmit;
// Por fim, crie o estado para armazenar os comentários e a renderização condicinal da lista de comentários;

import { Container } from "./components/container.js"
import { Button } from "./components/button.js"
import { Feed } from "./components/form.js"
import { Section } from "./components/section.js"
import { InputTxt } from "./components/input.ts"
import { InputEmail } from "./components/input.ts"
import "./style/app.module.css"
import styled from "styled-components"
import { useState } from "react"

export default function App() {

    const [comments,setComments] = useState([])
    const [email, setEmail] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const newComment = {
            id: Math.floor(Math.random * 1000000),
            email: email,
            content: content,
            createdAt: new Date()
        };

        setComments(state => [newComment, ...state]);
        setEmail("");
        setContent("");
    }

    return (
        <Container>
            <h2>Seção de comentarios</h2>
            <Feed onSubmit={handleSubmit}>
            <Section>
                <label htmlFor='email'>E-mail: </label>
                     <InputEmail id="email" type="email" required
                     value={email} onChange={(e) => setEmail(e.target.value)} small></InputEmail>

                <label htmlFor='content'>Comentários: </label>
                    <InputTxt id="content" type="text" required  
                    value={content} onChange={(e) => setContent(e.target.value)}small ></InputTxt>

                <Button>Enviar</Button>
            </Section>
    
                <Section className={styled.comentSection}>
                    {/* comentarios devem aparecer com email, data e o comentario */}
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <div key={comment.id}>
                                <h3>{comment.email}</h3>
                                <span>Em {comment.createdAt.toLocaleString()}</span>
                                <p>{comment.content}</p>
                            </div>
                        ))
                    ) : (
                            <p>Seja o primeiro a comentar!</p>
                    )}
                </Section>
                    

            </Feed>
        </Container>
        )
            
}