# To Do List Backend 

This project is a backend REST API that performs CRUD operations for a ToDo List. The backend is built using Node.js and Express. 

## Installation

Before installing this project, you need to have [Node.js](https://nodejs.dev/download/) on your machine.  
Fork or clone this repository, and run the following commands in the terminal at the root directory.

```bash
npm install
npm run dev
```
These two commands will install all the dependencies for this project and run the app in the development mode. 

## Features
* Gets all tasks
* Gets a task by ID
* Updates a task
* Deletes a task

## API Endpoints

### Fetch the tasks

###  ```GET /tasks```

A request to this endpoint returns a response with all the tasks.

###  ```GET /tasks/taskId```
A request to this endpoint requires a Task ID to be passed in the URL. If such a task with the given Task ID exists, you get a response containing the task you requested for.  
If the task does not exist, you get the ```404``` status code. 

### Create New Task

### ```POST /tasks```
This endpoint requires a body to be passed along with the request. If a valid body is passed with the request, a new task will be created.  
If not, you get the ```400 Bad Request``` status code.  


**Sample Body**
```javascript
{
    "content": "Your task content goes here.",
    "createdAt": "Task creation date",
    "updatedAt": "Task updation date"
}
```
All these values are required to create a new Task.

### Update A Task

### ``` PUT /tasks/taskId```
This endpoint will modify an existing task if it exists. It requires a valid task ID for modification. An additional key ```isComplete``` is also required in the body, for updating the task completion status.    

**Sample Body**
```javascript
{
    "content": "Modified task content goes here.",
    "createdAt": "Task creation date",
    "updatedAt": "Task updation date",
    "isComplete": true/false
}
```

### Delete A Task

### ``` DELETE /tasks/taskId```
This endpoint will delete an existing task. It requires a valid task ID for deletion. If the task does not exist, the response contains ```404``` status code.   

## Additional Details

* Uses MVC Architecture
* Validates requests and detects malformed body
* Uses File Storage to store tasks


## Directory Structure

```bash
.
├── app.js
├── package.json
├── package-lock.json
├── README.md
├── controllers
│   └── taskController.js
├── data
│   └── tasks.json
├── models
│   └── taskModel.js
├── routes
│   └── taskRouter.js
└── utils
    └── sendResponse.js

```

## License
[MIT](https://choosealicense.com/licenses/mit/)