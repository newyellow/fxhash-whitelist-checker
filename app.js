const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile('main-tool.html', {'root':path.join(__dirname)});
});

app.listen(port);