const express = require("express");
const app = express();
const { connection } = require("./connector");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Connecting to database
connection();

// creating an api and seperating it.
app.use("/api", require("./routes"));

if(process.env.NODE_ENV=='production'){
    const path = require('path')

    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'front-end','build')))
        res.sendFile(path.resolve(__dirname,'front-end','build','index.html'))
    })
}

// listening backend on a port.
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
