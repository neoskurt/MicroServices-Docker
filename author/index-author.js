const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
let authors = [
    {id: 1, name:"author1"},
    {id: 2, name:"author2"},
    {id: 3, name:"author3"},
]

app.get('/authors', (req, res)=> {
    res.json(authors)
})

app.get('/authors/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const author = authors.find(author => author.id === id);

    if(author) {
        res.json(author)
    }else{
        res.status(404).json({error: 'Not found'})
    }
})
app.listen(3002, () => {
    console.log("Author Microservice listenning to port 3002")
})