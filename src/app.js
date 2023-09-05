const express = require("express");
const {connect} = require("mongoose");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", routes);

const bootstrap = async () => {
  await connect("mongodb+srv://husanboyqobilov83:HusanboyQobilov@cluster0.fovjgzh.mongodb.net/user_and");
  

  app.listen(4000, () => {
    console.log(4000);
  });
};

bootstrap();

