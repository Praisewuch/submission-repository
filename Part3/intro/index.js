const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const Note = require('./models/note')

app.use(cors())
app.use(morgan('tiny'))
app.use(express.static('dist'))
app.use(express.json())




app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id).then(note => {
    if(note){
      response.json(note)
    } else{
      response.status(404).end()
    }
  })
    .catch(() => {error => next(error)})
})

app.delete('/api/notes/:id',(request,response,next) => {
  const id = request.params.id
  Note.findByIdAndDelete(id).then(() => {
    response.status(204).end()
  })
    .catch(err => next(err))
})

app.put('/api/notes/:id', (request, response, next) => {
  const { content, important }= request.body

  Note.findByIdAndUpdate(request.params.id, { content, important }, { new: true,runValidators: true, context:'query' }).then(updateNote => {
    response.json(updateNote)
  }).catch(err => next(err))
})

app.post('/api/notes', (request, response,next) => {
  const body = request.body

  if(body.content === undefined){
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  })

  note.save().then(savedNote => {
    response.status(201).json(savedNote)
  }).catch(err => next(err))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if(error.name === 'CastError'){
    return response.status(400).send({ error: 'malformatted id' })
  }else if(error.name === 'ValidationError'){
    return response.status(400).json({ error: error.message })
  }

  next(error)
}
app.use(errorHandler)

//search functionlaity of json-parser

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})