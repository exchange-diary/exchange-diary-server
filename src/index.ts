import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const port = 4000


/**
 *  2020.10.04 이유진
 *  REST 방식의 AP서버들은 웹 페이지의 본문 내용을 분석하려고 할 때 bodyParser와 cors 패키지를 use메서드를 사용해야한다.
 */
app
    .use(bodyParser.urlencoded({extended: true})) 
    .use(cors())
    .get('/', (req, res) => res.json({ message: 'hello world' }))
    .get('/hello/:skip/:limit', (req, res) => {
        console.log(req.params)
        res.json(req.params)
    })

    .listen(port, ()=> console.log(`http://localhost:${port} started ... `))
    