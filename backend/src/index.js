const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;
const mainRouter = require('./routes/index.js');

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);

app.use(function(req, res, next) {
    res.status(404).json({
        message : "Page not found"
    })
    next();
});

app.use(function(err, req, res, next) {
    res.status(404).json({
        message : "Server crashed",
        info : err.message
    })
    next();
});

app.listen(port, ()=> {
    console.log("server is running in the port")
});