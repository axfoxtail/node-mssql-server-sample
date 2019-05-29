var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	const config = {
    user: 'sa',
    password: 'mypassword',
		server: 'localhost',
		port: 59419,
    database: 'TestDB',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
	}
	const sql = require('mssql');

	sql.on('error', err => {
		console.log('=== err ===', err);
	})

	sql.connect(config).then(pool => {
		console.log('=== Connection is ok. ===');
		console.log('===pool===', pool);
	}).catch(err => {
		console.log('=== catch ===', err);
	});

});

module.exports = router;
