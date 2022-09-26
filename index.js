const express = require('express')
const dotenv = require('dotenv')

dotenv.config();
const app = express();

//middleware
app.use(express.json())


app.get('/',(req, res)=> {
    res.send("<h1>welcome to medical consultancy</h1>")

})

const PORT = process.env.PORT || 7000

app.listen(PORT, () => {
    console.log(`server is runing on ${PORT}`)

});