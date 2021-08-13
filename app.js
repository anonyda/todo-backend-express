
const express = require('express');
const taskRouter = require('./routes/taskRouter');
const {getAllTasks, getTaskById} = require('./controllers/taskController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
})

app.use('/tasks', taskRouter);

// app.get('/tasks', getAllTasks);
// app.get('/tasks/:taskId', getTaskById);


app.listen(3000, () => {
    console.log('Server started on port 3000')
});