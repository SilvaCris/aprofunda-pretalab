const TextService = require("../services/textServices")

const createText = (req, res) => {
  const { title, content, status, author } = req.body
  const newText = TextService.createText({ title, content, status, author })
  res.status(201).json({ message: `Texto ${newText.title} criado com sucesso ` })
}

const listTexts = (req, res) => {
  const texts = TextService.getAllTexts()
  res.json(texts)
}

const listText = (req, res) => {
  const { id } = req.query
  const text = TextService.getTextById(id)
  if (!text) {
    res.status(404).json({ message: `Text o com ID ${id} não encontrado` })
  }
  res.json(text)
}

const updatedText = (req, res) => {
  const { id } = req.params
  const data = req.body

    const UpdatedText = TextService.updatedTextById(id, data)

    if (!UpdatedText) {
      return res.status(404).json({ message: `Texto com o ${id} não encontrado` })

    }
    res.json({ message: `Texto com o ${id} editado com sucesso` })

    
}

const deleteText = (req, res) =>{
  const { id } = req.params

  const textDeleted = TextService.deleteTextById(id)

  if(!textDeleted){
    return res.status(404).json({ message: `Texto com o ${id} não encontrado` })
  }
  res.json(textDeleted)
}






module.exports = { createText, listTexts, listText, updatedText, deleteText }




