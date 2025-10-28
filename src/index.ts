import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import express from 'express';
import type { Request, Response, Express } from 'express';
import PostHandler from './utils/post.handler.ts';
import type { GetRequest } from './dtos/get.request.ts';
import GetHandler from './utils/get.handler.ts';

dotenv.config()

const app: Express = express()
app.use( bodyParser.json())
const port = process.env.PORT || 3000

app.post("/", (req: Request, res: Response) => {
    const body = req.body
    const response = PostHandler.buildResponse(body)
    res.json(response)
})

app.get("/", (req: Request, res: Response) => {
    const data: GetRequest = req.query
    const response = GetHandler.buildResponse(data)
    res.json(response)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

