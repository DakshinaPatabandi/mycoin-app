const express = require("express")
const mysql = require('mysql')
const cors = require('cors')

const cookieParser = require('cookie-parser'); // new
const jwt = require('jsonwebtoken') // new

const app = express()
app.use(express.json())
app.use(cookieParser()) // new
// app.use(cors())
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST, GET"],
        credentials: true
    }
))


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "mycoin"
})

const verifyUser = (req, res, next) => { //New set
    const token = req.cookies.token;
    if(!token) {
        return res.json({Message: "we need token, pls provide it"})
    }else{
        jwt.verify(token, "our_jsonwebtoken_secret_key", (err, decoded) => {
            if(err){
                return res.json({Message: "Authentication Failed"})
            }else{
                req.username = decoded.username;
                next();
            }
        } )
    }
}

app.get('/', verifyUser, (req, res) => { //New set
    return res.json({Status: "Success", username: req.username})
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`username`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.username,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json('Error')
        }
        return res.json(data)
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `username` = ? AND `password` = ?";
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if(err) {
            return res.json('Error')
        }
        if(data.length > 0) {
            const username = data[0].username;
            const token = jwt.sign({username}, "our_jsonwebtoken_secret_key",{expiresIn: '1d'}); //New
            res.cookie('token', token);                                                          //New
            return res.json({status: "Success", username: username})
        } else {
            return res.json("Fail")
        }
        
    })
})

app.post('/Register', (req,res) => {
    res.clearCookie('token');
    return res.json({Status: "Success"})
})

app.get('/Income', (req, res) => {
    const sql = "SELECT * FROM income";
    db.query(sql, (err, data) => {
        if(err) {
            return res.json('Error')
        } else {
            return res.json(data)
        }  
        
    })
})

app.get('/Expenses', (req, res) => {
    const sql = "SELECT * FROM expenses";
    db.query(sql, (err, data) => {
        if(err) {
            return res.json('Error')
        } else {
            return res.json(data)
        }  
        
    })
})
// -----------------------------------------------------------Income-ADD----------------------------------------------------------


app.post('/CreateIncome', (req, res) => {
    const sql = "INSERT INTO income (`Source`, `Income`) VALUES (?)";
    const values = [
        req.body.source,
        req.body.income
        // req.body.email
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json('Error')
        }
        return res.json(data)
    })
})

// -----------------------------------------------------------Income-update----------------------------------------------------------
app.put('/UpdateIncome/:id', (req, res) => {
    const sql = "update income set `Source` =?, `Income` =? where In_ID =?";
    const values = [
        req.body.source,
        req.body.income
        // req.body.email
    ]
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if(err) {
            return res.json('Error')
        }
        return res.json(data)
    })
})

// -----------------------------------------------------------Income-Delete----------------------------------------------------------
app.delete('/Income/:id', (req, res) => {
    const sql = "DELETE FROM income where In_ID =?";

    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if(err) {
            return res.json('Error')
        }
        return res.json(data)
    })
})


// -----------------------------------------------------------Expenses-ADD----------------------------------------------------------
app.post('/CreateExpenses', (req, res) => {
    const sql = "INSERT INTO expenses (`Method`, `Cost`) VALUES (?)";
    const values = [
        req.body.method,
        req.body.cost
        // req.body.email
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json('Error')
        }
        return res.json(data)
    })
})
// -----------------------------------------------------------Expenses-update----------------------------------------------------------
app.put('/UpdateExpenses/:id', (req, res) => {
    const sql = "update expenses set `Method` =?, `Cost` =? where Ex_ID =?";
    const values = [
        req.body.method,
        req.body.cost
        // req.body.email
    ]
    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if(err) {
            return res.json('Error')
        }
        return res.json(data)
    })
})

// -----------------------------------------------------------Expenses-Delete----------------------------------------------------------
app.delete('/Expenses/:id', (req, res) => {
    const sql = "DELETE FROM expenses where Ex_ID =?";

    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if(err) {
            return res.json('Error')
        }
        return res.json(data)
    })
})






app.listen(8801, () => {
    console.log('listening');
})