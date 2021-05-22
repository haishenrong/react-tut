const express = require('express')
var morgan = require('morgan')
const app = express()
const cors = require('cors')

// Lets frontend in
app.use(cors())
// Using production build copied from frontend
app.use(express.static('build'))
app.use(express.json())

morgan.token("postPerson", function (req, res) {
  return JSON.stringify({
    "name": req.body.name,
    "number": req.body.number
  })
})
app.use(morgan(':method :url :response-time :postPerson'))

let persons = [
    {
      id: 1,
      name: "Arto Hellas",
      number: "040-1234567"
    },
    {
      id: 2,
      name: "Ada Lovelace",
      number: "39-44-5323523"
    },
    { 
      id: 3,
      name: "Dan Abramov", 
      number: "12-43-234345" 
    },
    { 
      id: 4,
      name: "Mary Poppendieck", 
      number: "39-23-6423122" 
    },
    {
      id: 5,
      name: "Martin Fowler",
      number: "37-42-1985479"
    }
]


const generateId = () => {
  let nextId = Math.floor(Math.random()*1000000)+5
  while(persons.map(p => p.id).includes(nextId))
  {
    nextId++;
  }
  return nextId
}



app.get('/info', (request, response) => {
  response.send(
    `<div> Phonebook has info for ${persons.length} people</div>
    <div>${new Date}</div>`)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
    
  if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'name or number missing' 
    })
  }

  if(persons.map(p => p.name).includes(body.name))
  {
    return response.status(400).json({ 
      error: 'name already exists' 
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(person)
  response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})


//app.use(assignPerson)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})