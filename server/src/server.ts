import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)


app.get('/', (req, res) => {
    const data = req.body
    console.log(data)

    res.send()
})

app.listen(3333)