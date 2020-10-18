import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import './db';
import { User } from './db';
import * as apiController from "./controllers/api.controller";

export const router = express.Router();
const app = express()
const port = 4000


/**
 *  2020.10.04 이유진
 *  REST 방식의 AP서버들은 웹 페이지의 본문 내용을 분석하려고 할 때 bodyParser와 cors 패키지를 use메서드를 사용해야한다.
 */
app
    .use(bodyParser.urlencoded({extended: true})) 
    .use(bodyParser.json()) // json을 parse하도록 함
    .use(cors())
    .get('/', (req, res) => res.json({ data: 'hello world' }))
    .get('/user', apiController.controllers.find_user)
    .post('/login', apiController.controllers.login)
    .post('/sign_up', apiController.controllers.sign_up)
    
    .listen(port, ()=> console.log(`http://localhost:${port} started ... `))
    