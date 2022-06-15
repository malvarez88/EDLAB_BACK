const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const errorMessages = require("./utils/errorMessages")

const indexRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  console.log(err)
  if (!(Array.isArray(err))) return res.status(500).send({message:err.message|| "Error desconocido en el servidor"})
  let errores = []
  err["errors"].forEach(error=>{
      let typeError = error["validatorName"]  
      errores.push(errorMessages[typeError](error.path,error.validatorArgs[0],error.validatorArgs[1]) || error.message) 
  })
  return res.status(500).send({message:(errores.length ? errores[0] : err.message) || "Error desconocido en el servidor"});
});

module.exports = app;
