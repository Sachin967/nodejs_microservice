import express from 'express'
const app = express()

app.use(express.json())

app.use('/', (req, res) => {
  res.status(200).json({ msg: 'hi from shopping' })
})

app.listen(9000, () => {
  console.log('shopping is running on port 9000')
})
