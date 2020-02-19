
const express = require('express');
const bodyParser = require('body-parser');
const posteroute = require('./routes/post');
const app = express();


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.json()); // application/json
app.post('/files', (req, res) => {
    console.log(req.body);
    const file = req.body;
    const base64data = file.content.replace(/^data:.*,/, '');
    res.status(200).json({ message: 'OK' });
   /* fs.writeFile(userFiles + file.name, base64data, 'base64', (err) => {
        if (err) {
            console.log(err);
            res.status(200).json({ message: 'OK' });
        } else {
            res.set('Location', userFiles + file.name);
            res.status(200).json({ message: 'PK' });
        }
    });*/
});
const server = app.listen(8080);
