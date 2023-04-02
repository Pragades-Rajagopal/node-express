const express = require('express');
const app = express();
const router = express.Router()

app.use(express.json())

// Define a basic route
router.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

var items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
]

// Define a route that returns a list of items
router.get('/items', (req, res) => {
    res.status(200).json({ items: items });
});

// Define a route that returns a single item
router.get('/items/:id', (req, res) => {
    const id = req.params.id;
    const item = [...items].find(e => {
        if (e.id == id) {
            return e
        }
    });
    res.status(200).json(item);
});

// Define a route that creates a new item
router.post('/items', (req, res) => {
    const item = req.body;
    items.push(item)
    res.status(201).json(item);
});

// Define a route that updates an existing item
router.put('/items/:id', (req, res) => {
    const id = req.params.id;
    const item = req.body;
    [...items].find(e => {
        if (e.id == id) {
            e.name = item.name
        }
    });
    res.status(200).json({ message: "update success" });
});

// // Define a route that deletes an existing item
router.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    items = [...items].filter(e => {
        return e.id != id
    });
    res.json({ message: "delete success" });
});

// Register the router with the Express.js app
app.use('/api', router);

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});