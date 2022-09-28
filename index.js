const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/connectDB')
const userRoute = require("./routes/userRoute")
const medicalRoute = require("./routes/medicalRoute")
const morgan = require("morgan")


const app = express();

dotenv.config();
connectDB();

//middleware
app.use(express.json())
app.use("/api/user", userRoute)
app.use("/api/medical", medicalRoute)
app.use(morgan('dev'))


app.get('/',(req, res)=> {
    res.send("<h1>welcome to medical consultancy</h1>")

})

const PORT = process.env.PORT || 7000

app.listen(PORT, () => {
    console.log(`server is runing on ${PORT}`)

});