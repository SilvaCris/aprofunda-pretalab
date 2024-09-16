const express = require ('express')
const router = express.Router()
const cors = require ('cors')

const musics = []

const app =  express()

app.use(express.json())
app.use(cors())

const getMusics = router.get('/music', (req, res) => {
    res.status(200).json(musics)
})

const createMusic = router.post('/music', (req, res) => {
    const music = {
        id: req.body.id,
        description: req.body.description,
        title: req.body.title,
        status: req.body.status
    }
    
    musics.push(music)

    res.status(201).json(`A música ${music.title}, lançada em ${music.description} foi adicionado ao álbum `)

})

app.use(getMusics)
app.use(createMusic)


app.listen(3333, console.log('Servidor rodando com sucesso'))