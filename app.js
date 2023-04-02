const express = require('express');
const app = express();
const router = express.Router()

const PORT = 8000;

router.get('/', (request, response) => {
    response.send("hello world!")
});

router.get('/goodbye', (request, response) => {
    response.send("thanks for visiting")
});

app.use('/myapp', router)

app.listen(PORT, () => {
    console.log(`server is running in port:${PORT}`);
})