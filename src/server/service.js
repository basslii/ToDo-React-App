const api = require('./api');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3300;

const app = express();

const corsOption = {
    origin: 'http://localhost:3300'
};

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
        extended: true,
    })
)

app.use(cors(corsOption));

app.get('/todos', api.getTasks);
app.get('/todos/:id', api.getTaskById);
app.post('/todos', api.createTask);
app.put('/todos/:id', api.updateTask);
app.delete('/todos/:id', api.deleteTask);

app.listen(PORT, () => {
    console.log(`App Is Listening On Port: ${PORT}`);
})
