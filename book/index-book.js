const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
let books = [
    {id: 1, title:"title", authorId:1, categoryId:1},
    {id: 2, title:"title2", authorId:2, categoryId:2},
    {id: 3, title:"title3", authorId:2, categoryId:3},
]

app.get('/books', (req, res)=> {
    res.json(books)
})

app.get('/books/:id', async (req, res)=> {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);

    if(book) {
        try{
            const author = await fetch("http://localhost:3002/authors/"+ book.authorId).then(response => response.json())
            .then(data => {
              return data;
            })
            const category = await fetch("http://localhost:3001/categories/"+ book.categoryId).then(response => response.json())
            .then(data => {
              return data;
            })

            const bookDetail = {
                id: book.id, 
                title : book.title,
                author: author.name,
                category: category.title,
            }
            res.json(bookDetail) 
        }catch(e) {
            res.status(500).json({error:"Error getting book"})
        }

    }else{
        res.status(404).json({error: 'Not found'})
    }
})
app.listen(3003, () => {
    console.log("Book Microservice listenning to port 3003")
})