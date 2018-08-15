var path = require("path");
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 8080));
app.set('host', '0.0.0.0')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.get('/linkedin', (req, res) => {
    res.redirect(301, 'https://www.linkedin.com/in/benfranzi/')
});

app.get('/github', (req, res) => {
    res.redirect(301, 'https://github.com/BenFranzi/')
});

app.listen(app.get('port'), app.get('host'));
console.log(`Running on http://${app.get('host')}:${app.get('port')}`);