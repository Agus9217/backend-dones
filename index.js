import 'dotenv/config'
import './src/config/mongo.js'
import './src/libs/init.js'
import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())

app.listen(PORT, () => {
  console.log(`Server is runing on: http://localhost:${PORT}`)
})
