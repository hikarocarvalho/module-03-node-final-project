const mongoose = require('mongoose');

const tasksModel = new mongoose.Schema({
    type_task_id:{ type: Number, required: true },
    title: { type: String, required: true },
    userid: { type: String, required: true },
    description: { type: String, required: true }
})

const tasks = mongoose.model("projects", tasksModel);

module.exports = tasks;