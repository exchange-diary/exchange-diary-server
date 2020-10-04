import express from 'express'
const app = express()
const port = 4000

app
    .get('/', (req, res) => res.json({ message: 'hello world' }))
    .get('/hello/:skip/:limit', (req, res) => {
        console.log(req.params)
        res.json(req.params)
    })

    .listen(port, ()=> console.log(`http://localhost:${port} started ... `))
    