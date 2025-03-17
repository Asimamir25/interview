const express = require("express");
const connectDb = require("./db/db");
const router = require("./routes/userRoutes");
connectDb();
const app = express();

app.use(express.json());
app.use("/api/user", router);
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(9090, () => {
  console.log("app is listing");
});
