const express = require("express");
const connectDb = require("./db/db");
const cors = require("cors");
const router = require("./routes/TaskRoutes");
connectDb();
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "https://todomern-beryl.vercel.app", // Allow your Vercel frontend
  })
);

app.use(express.json());
app.use("/api", router);
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(9090, () => {
  console.log("app is listing");
});
