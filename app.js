const express = require("express");
const app = new express();
const router = require("./src/Routes/api");
// security middlewere import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");
// security middlewere implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
// express-rate-limit implemention
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);
app.use("/api", router);
// undefined route handling
app.use("*",(req,res) =>{
    res.status(404).json({status:"fail",data:"Not found"});
})
module.exports = app;
