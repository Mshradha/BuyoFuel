const express = require("express");
const connection = require("./config/db");

const app = express();
const TodoModal = require("./Modals/Todo.Modal");
var cors = require("cors");
app.use(express.json());

app.use(cors());

app.get("/", async (req, res) => {
  const results = await TodoModal.find();
  res.send(results);
});

app.post("/post", async (req, res) => {
  const { task, status } = req.body;
  const results = new TodoModal({
    task,
    status,
  });
  await results.save();
  res.send(results);
});

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  const results = await TodoModal.findOneAndDelete({ _id: id });
  res.send("Delete Successfull");
});
app.patch("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const sol = await TodoModal.updateOne({ _id: id }, body, { new: true });
  res.send("Task is Completed");
});
app.delete("/remove", async (req, res) => {
  const results = await TodoModal.remove({});
  res.send("Data remove");
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connection made");
  } catch (error) {
    console.log("error", error);
  }
});
