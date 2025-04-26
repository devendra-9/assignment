const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
const routes = require("./routes/mainRoute")
const body_parser = require("body-parser")
const cookie_parser = require("cookie-parser")
const port = 3000
app.use(express.json())
app.use(cors())
const user = app.use("/index",routes)
app.use(body_parser.urlencoded({ extended: true }))
app.use(cookie_parser())

const uri = `Please connect to your mongo db`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB 'product' database"))

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})