import { connect } from "mongoose"
import autoIncrement from "mongoose-id-autoincrement"

const DB_URI = process.env.DB_URI


const dbConnect = async () => {
  try {
    const db = await connect(DB_URI)
    autoIncrement.initialize(db)
    console.log(`### DATABASE IS RUNNING ON: ${db.connection.name}`)
  } catch (err) {
    console.log(`### DATABASE ERROR: ${err.message}`)
  }
}

dbConnect()
