import express from 'express'
import cors from 'cors'
import proxy from 'express-http-proxy'

const app = express()

app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{
  console.log(req)
  next()
})

app.use('/customer',proxy('http://localhost:7500'))
app.use('/shopping',proxy('http://localhost:9000'))
app.use('/',proxy('http://localhost:8000'))

app.listen(3001, () => console.log('running on http://localhost:3001'))