const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
let categories = [
    {id: 1, title:"category1"},
    {id: 2, title:"category2"},
    {id: 3, title:"category3"},
]

app.get('/categories', (req, res)=> {
    res.json(categories)
})

app.get('/categories/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const category = categories.find(category => category.id === id);

    if(category) {
        res.json(category)
    }else{
        res.status(404).json({error: 'Not found'})
    }
})
app.listen(3001, () => {
    console.log("Category Microservice listenning to port 3001")
})