const mongoose = require('mongoose');

const TasksSchema = new mongoose.Schema({

    Description: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Duedate:{
        type: String,
        required: true
    },
    Status:{
        type: Boolean,
        required:true   
    }
});


const Tasks = mongoose.model('Contact', TasksSchema);

module.exports = Tasks;