const express = require('express');
const app = express();

const PORT = 8000;

app.get('/hello', (request, response) => {
    response.send("hello world!")
});

app.get('/goodbye', (request, response) => {
    response.send("thanks for visiting")
});

app.listen(PORT, () => {
    console.log(`server is running in port:${PORT}`);
})