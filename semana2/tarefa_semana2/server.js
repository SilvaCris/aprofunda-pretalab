const express = require('express')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')


const postsRouter = express.Router()
const app = express()
const PORT = 3333

app.use(express.json())
app.use(cors())

const postsLists = []

    postsRouter.post('/posts', (req, res) => {
    const { content, format } = req.body
    
    const newPost = {
        id: uuidv4(),
        content: content,
        format: format,
        created_at: new Date().toLocaleDateString('pt-BR'),
       
    }
    postsLists.push(newPost)
    res.status(201).json({message: `Postagem do tipo ${format} criada com sucesso `})
    })
    
     

postsRouter.get('/posts', (req, res)=> {

  if(postsLists.length == 0){
    res.status(404).json({message:`Ainda não há postagens nessa lista `})

  }
    res.json(postsLists)
})


postsRouter.get('/post', (req, res)=> {
    const id = req.query.id
    const postFound = postsLists.find(post => post.id === id)
   
    if (!postFound) {
      return res.status(404).json({ message: `postagem com o id ${id} não encontrado`})
    }

res.json(postFound)
})
    

postsRouter.patch('/post/:id', (req, res)=> {
    const {id} = req.params
    const { content, format } = req.body

    const postFound = postsLists.find(post => post.id ===id) 
    
  if (!postFound) {
    return res.status(404).json({ message: `postagem com o id ${id} não encontrado`})
  }
    if (format != null) {
        postFound.format = format
      }
    
      if (content != null) {
        postFound.content = content
      }
    
  
      res.json({ message: `Postagem com o id ${id} editada com sucesso`})
    })
    


postsRouter.delete('/post/:id', (req, res)=> {
    const { id } = req.params

    const postFound = postsLists.find(post => post.id ===id) 
    
  if (!postFound) {
    return res.status(404).json({ message: `postagem com o id ${id} não encontrado`})
  } 
    const postUpdated = postsLists.filter(post => post.id !== id)

    res.json(postUpdated)
})


app.use(postsRouter)
app.listen(PORT, console.log(`Servidor rodando com sucesso na porta ${PORT}`))