import express from 'express'
const app = express()

app.use(express.json())

app.use('/', (req, res) => {
  res.status(200).json({ msg: 'hi from products' })
})

app.listen(8000, () => {
  console.log('products is running on port 8000')
})
