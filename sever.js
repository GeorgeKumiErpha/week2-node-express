require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => res.send('My Week 2 API'));

app.post('/user', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'Missing fields' });
    res.status(201).json({ message: `Hello, ${name}!` });
});

app.get('/user/:id', (req, res) => {
    res.send(`User ${req.params.id} profile`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});