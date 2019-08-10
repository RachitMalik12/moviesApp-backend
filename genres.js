const express = require('express'); 
const app = express(); 
app.use(express.json()); 

const genres = [
    {id: "1", name: "Action",
     id: '2', name: 'Horror',
      id: '3', name: 'Adventure'
      id: '4', name: 'Thriller'
      id: '5', name: 'Murder Mystery' 
    }

]; 

app.get('/api/genres', (req,res) => {
    res.send(genres); 
})


const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Running fast on port {$port}`); 