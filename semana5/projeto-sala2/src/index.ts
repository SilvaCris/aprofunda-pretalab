import express, { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import slug from "slug"

export const app = express()
app.use(express.json())

interface Text {
    id: string
    title: string
    content: string
    slug: string
    status: string
    created_at: string
    author: string
}

const textsList: Text[] = []

app.post('/texts', (req: Request, res: Response) => {
    const { title, content, status, author } = req.body
    const newText: Text = {
        id: uuidv4(),
        title: title,
        content: content,
        slug: title,
        status: status,
        created_at:new Date().toLocaleDateString('pt-BR'),
        author: author

    }
    textsList.push(newText)
    res.status(201).json({message: `Texto ${title} criado`})
})

app.get('/texts', (req: Request, res: Response) => {
    res.json(textsList)
   
})


if (require.main === module) {
    const PORT = 3333
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`)
    })
}