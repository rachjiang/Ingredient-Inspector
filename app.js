const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const predictRouter = require('./routes/predict');

const app = express();
// urlencoded recognizes the incoming request obj as strings or arrays; json recognizes it as a JSON obj
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// the express object is serving static files from 'public' in the root directory. This contains a copy of the files from the /frontend/build
app.use(express.static(path.join(__dirname, 'public')));

app.get('/hello', function (req, res) {
    res.send('hello')
})
app.use('/predict', predictRouter);
// this route responds by returning the index.html file from /frontend/build. previously, the frontend was running on its own port. now everything can run on one and be deployable. 
app.get('/', function (req, res) {
    return res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || '8080';

app.set('port', port);
const server = http.createServer(app);
server.listen(port);
server.on('listening', () => {
    console.log('Listening on ' + port)
});
