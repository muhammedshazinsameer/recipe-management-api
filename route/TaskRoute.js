const express = require('express');
const router = express.Router();

const {addTask,getTask,updateTasks,deleteTasks} = require('../controller/Taskcontroller')


router.get('/',getTask);
router.post('/',addTask);
router.put('/:id',updateTasks);
router.delete('/:id',deleteTasks)


module.exports = router;