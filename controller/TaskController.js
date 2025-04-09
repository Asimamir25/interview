const Task = require("../models/model");

// GET all tasks
const getTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      message: "Tasks fetched successfully",
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tasks", error });
  }
};

// POST add a new task
const addTask = async (req, res) => {
  try {
    const { title, status } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = new Task({ title, status });
    await task.save();

    res.status(201).json({
      message: "Task created successfully",
      data: task,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create task", error });
  }
};

// PUT update a task
const editTask = async (req, res) => {
  try {
    const { title, status } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, status },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Task updated successfully",
      data: updatedTask,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update task", error });
  }
};
const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res
      .status(200)
      .json({ message: "Task deleted successfully", data: deletedTask });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete task", error });
  }
};

module.exports = { getTask, addTask, editTask, deleteTask };
