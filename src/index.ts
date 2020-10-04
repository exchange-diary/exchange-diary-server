// import express from 'express'
import express from 'express'
const app = express()
const port = 4000

app
    .get('/', (req, res) => res.json({ message: 'hello world' }))
    .listen(port, ()=> console.log(`http://localhost:${port} started ... `))

    