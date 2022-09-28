import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const db = mysql.createConnection({
	host: 'coms-319-g11.class.las.iastate.edu',
	user: 'g11',
	password: 'wordle',
	database: 'wordle',
})

db.connect((err) => {
	if (err) throw err
	// console.log('connected to mysql')
})

const app = express()
app.use(cors())
app.use(express.json())

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });


app.get('/', (req, res) => {
	res.send('server is running')
})

// creating database and tables

app.get('/createdb', (req, res) => {
	let sql = 'CREATE DATABASE wordle'
	db.query(sql, (err) => {
		if (err) throw err
		res.send('database created')
	})
})

app.get('/createaccounts', (req, res) => {
	let sql =
		'CREATE TABLE accounts(username VARCHAR(20), password VARCHAR(20), createdAt DATE, PRIMARY KEY(username))'
	db.query(sql, (err) => {
		if (err) throw err
		res.send('accounts table created')
	})
})

app.get('/createguesses/', (req, res) => {
	let sql =
		'CREATE TABLE guesses(username VARCHAR(20), word VARCHAR(20), letters VARCHAR(200), colors VARCHAR(250), createdAt DATE, guessNum INT, PRIMARY KEY(username, word))'
	db.query(sql, (err) => {
		if (err) throw err
		res.send('guesses table created')
	})
})

app.get('/registeruser/', (req, res) => {
	// console.log(req.query)
	let user = {
		username: req.query.username,
		password: req.query.password,
		createdAt: req.query.createdAt,
	}
	let sql = `INSERT INTO accounts (username, password, createdAt) VALUES ('${user.username}', '${user.password}', '${user.createdAt}')`
	let query = db.query(sql, user, (err) => {
		if (err) {
			res.send(false)
			return
		}
		res.send(true)
	})
})

app.get('/loginuser/', (req, res) => {
	// console.log(req.query)
	let user = {
		username: req.query.username,
		password: req.query.password,
	}
	let sql = `select username, password from accounts where username='${req.query.username}' and password='${user.password}'`
	let query = db.query(sql, (err, results) => {
		if (err) {
			res.send(false)
			return
		}
		res.send(results[0])
	})
})

app.get('/getcreatedat/', (req, res) => {
	let sql = `SELECT createdAt FROM accounts WHERE username = '${req.query.username}'`
	let query = db.query(sql, (err, results) => {
		if (err) {
			throw err
		}
		res.send(results[0].createdAt)
	})
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
	// console.log('server started on port', PORT)
})

app.get('/uploadguess', (req, res) => {
	let sql =
		'INSERT INTO guesses(username, word, letters, colors, createdAt, guessNum) VALUES(?, ?, ?, ?, ?, ?)'
	let values = [
		req.query.username,
		req.query.word,
		req.query.letters,
		req.query.colors,
		req.query.createdAt,
		req.query.guessNum,
	]
	db.query(sql, values, (err) => {
		if (err) throw err
		res.send('guess uploaded')
	})
})

app.get('/getguesses', (req, res) => {
	let sql = `SELECT * FROM guesses WHERE username = '${req.query.username}'`
	let query = db.query(sql, (err, results) => {
		if (err) throw err
		res.send(results)
	})
})

app.get('/getleaderboard', (req, res) => {
	let sql = `SELECT username, count(*) as totalWins, avg(guessNum) as avgGuesses FROM guesses 
	WHERE guessNum >= 1 and guessNum <= 6 and username <> 'null' 
	GROUP BY username ORDER BY totalWins DESC, avgGuesses ASC`
	let query = db.query(sql, (err, results) => {
		if (err) throw err
		res.send(results)
	})
})
