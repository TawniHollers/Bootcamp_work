var express = require('express');
var router = express.Router();

//import mysql. we got this from npm
const mysql = require('mysql');
const db_creds = require('../config/config.js');

// Set up a connection to use and reuse...
const connection = mysql.createConnection(db_creds);

// We made a connection above, now actually run it
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
	// get the msg var out of the query string
	let message = req.query.msg;
	if(message === 'added'){
		message = 'Your task was added!';
	}
	else if(message === 'deleted'){
		message = 'Your task was deleted';
	}
	else if(message === 'edited'){
		message = "Your task has been edited";
	}

	const selectQuery = `SELECT * FROM  tasks`;

	connection.query(selectQuery, (error, results)=>{
		if(error){throw error;}
		res.render('index', { 
			message,
			title: 'Express',
			taskArray: results
		})
	})

});

router.post('/addItem',(req, res)=>{
	const taskName = req.body.newTask;
	const taskDate = req.body.newTaskDate;
	// res...
	// 1. send
	// 2. render
	// 3. json
	// req.query is for get requests or query string
	// req.body is for data passed in via post
	// we know that someone submitted the form. We know that because they are at the post, addItem route.
	// We got the data the form sent out of the req.body object and stored it.
	// Now... we need to put it into our DB (mysql)

	const insertQuery = `Insert into tasks (task_name, task_date)
		VALUES (?,?)`;
	// query args:
	// 1. Query string
	// 2. array corresponding to ? in query
	// 3. callback to run when query is finished

	console.log(`$$$$$$$$$$$$$$$$ Ready to run the query $$$$$$$$$$$$$$$$$$`);

	connection.query(insertQuery,[taskName,taskDate],(error, results)=>{
		if(error) throw error;
		console.log(`=============== Query did not error< sending to the homepage =========`);
		res.redirect('/?msg=added');
	});

	// res.json(req.body);
})

router.get('/delete/:id', (req, res)=>{
	const idToDelete = req.params.id;
	const deleteQuery = `DELETE FROM tasks WHERE ID = ?`;

	connection.query(deleteQuery, [idToDelete], (error, results)=>{
		if(error) {throw error;}
		res.redirect('/?msg=deleted');
	})
})

router.get('/edit/:id', (req, res)=>{
	const idToEdit = req.params.id;
	
	res.render('edit', [taskId = idToEdit]);
})

router.post('/update/:id', (req, res)=>{
	const idToEdit = req.params.id;
	const taskName = req.body.newTask;
	const taskDate = req.body.newTaskDate;
	const editQuery = `UPDATE tasks SET task_name = ?, task_date = ? WHERE ID = ?`;

	connection.query(editQuery, [taskName, taskDate, idToEdit], (error, results)=>{
		if(error){throw error;}
		res.redirect('/?msg=edited');
	})
})

module.exports = router;
