import 'dotenv/config'
import './src/config/mongo.js'
import './src/libs/init.js'
import express from 'express'
import cors from 'cors'
import router from './src/routes/index.js'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server is runing on: http://localhost:${PORT}`)
})
