const express = require('express'); 
const Joi = require('joi'); 
const app = express(); 
app.use(express.json()); 

const genres = [
    {id: "1", name: "Action"},
    {id: '2', name: 'Horror'},
    {id: '3', name: 'Adventure'}, 
    {id: '4', name: 'Thriller'},
    {id: '5', name: 'Murder Mystery'}
    

]; 

app.get('/api/genres', (req,res) => {
    res.send(genres); 
})

app.get('/api/genres/:id', (req,res) => {
    const genre = genres.findOne(genre => genre.id === parseInt(req.params.id)); 
    if (!genre) res.status(404).message('Sorry, genre not found'); 
   
    res.send(genre); 
})

const validateRequest(genre) {
    const schema = {

    }
}

const port = process.env.PORT || 4000; 
app.listen(port, () => console.log('Running fast on port ' + port)); 