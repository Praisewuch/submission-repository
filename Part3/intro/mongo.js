const mongoose = require('mongoose')

const password = '3kGj5Ye6Uxv72ANt'

const uri = `mongodb+srv://PraiseWuche:${password}@cluster0.cv677.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)
mongoose.connect(uri)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is easy',
  important: true,
})

note.save().then(() => {
  console.log('note saved!')
  mongoose.connection.close()
})
