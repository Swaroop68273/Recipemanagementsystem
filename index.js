const mysql = require('mysql2');

// Database connection details
const dbConfig = {
    host: "localhost",
    user: "your_username",
    password: "your_password",
    database: "your_database",
};

// Create a connection to the database
const connection = mysql.createConnection(dbConfig);

// Connect to the database
connection.connect(function (err) {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database as id ' + connection.threadId);
});

// Execute a SQL query
const sql = 'SELECT * FROM your_table';
connection.query(sql, function (error, results) {
    if (error) {
        console.error('Error executing the query: ' + error);
        return;
    }
    if (results.length > 0) {
        results.forEach((row) => {
            console.log(`ID: ${row.id} - Name: ${row.name}`);
        });
    } else {
        console.log('0 results');
    }
    
    // Close the database connection
    connection.end(function (err) {
        if (err) {
            console.error('Error closing the database connection: ' + err.stack);
        }
        console.log('Connection closed.');
    });
});
