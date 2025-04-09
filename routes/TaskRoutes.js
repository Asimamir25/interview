const express = require("express");
const {
  getTask,
  addTask,
  editTask,
  deleteTask,
} = require("../controller/TaskController");
const router = express.Router();

router.get("/task", getTask);
router.post("/addTask", addTask);
router.put("/edit/:id", editTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;
