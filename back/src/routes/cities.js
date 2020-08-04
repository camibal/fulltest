const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

//CITIES
router.get('/cities', (req, res) => {
    mysqlConnection.query('SELECT * FROM cities', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.post('/cities', (req, res) => {
    const { id, city, country, continent } = req.body;
    const query = `
        CALL citiesAddOrEdit(?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, city, country, continent], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'User saved' })
        } else {
            console.log(err);
        }
    })
});

router.delete('/cities/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM cities WHERE id = ?', [id], (err, rows, fileds) => {
        if (!err) {
            res.json({ status: 'User Delete' })
        } else {
            console.log(err);
        }
    })
});

router.put('/cities/:id', (req, res) => {
    const { city, country, continent } = req.body;
    const { id } = req.params;
    const query = 'CALL citiesAddOrEdit(?, ?, ?, ?)';
    console.log(JSON.stringify(req.body));
    mysqlConnection.query(query, [id, city, country, continent], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'User Updated' });
        } else {
            console.log(err);
        }
    })
});

//FOOTBALL TEAMS
router.get('/teams', (req, res) => {
    mysqlConnection.query('SELECT * FROM teams', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.post('/teams', (req, res) => {
    const { id, equipment, ligue, country } = req.body;
    const query = `
        CALL teamsAddOrEdit(?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, equipment, ligue, country], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Team saved' })
        } else {
            console.log(err);
        }
    })
});

router.delete('/teams/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM teams WHERE id = ?', [id], (err, rows, fileds) => {
        if (!err) {
            res.json({ status: 'User Delete' })
        } else {
            console.log(err);
        }
    })
});

router.put('/teams/:id', (req, res) => {
    const { equipment, ligue, country } = req.body;
    const { id } = req.params;
    const query = 'CALL teamsAddOrEdit(?, ?, ?, ?)';
    console.log(JSON.stringify(req.body));
    mysqlConnection.query(query, [id, equipment, ligue, country], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Team Updated' });
        } else {
            console.log(err);
        }
    })
});

//USERS
router.get('/users', (req, res) => {
    mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.post('/users', (req, res) => {
    const { id, name, email, age } = req.body;
    const query = `
        CALL usersAddOrEdit(?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, name, email, age], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'User saved' })
        } else {
            console.log(err);
        }
    })
});

router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM users WHERE id = ?', [id], (err, rows, fileds) => {
        if (!err) {
            res.json({ status: 'User Delete' })
        } else {
            console.log(err);
        }
    })
});

router.put('/users/:id', (req, res) => {
    const { name, email, age } = req.body;
    const { id } = req.params;
    const query = 'CALL usersAddOrEdit(?, ?, ?, ?)';
    console.log(JSON.stringify(req.body));
    mysqlConnection.query(query, [id, name, email, age], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'User Updated' });
        } else {
            console.log(err);
        }
    })
});

module.exports = router;