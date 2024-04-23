const express = require("express")
const mysql = require('mysql')
const cors = require('cors')
const cookieParser = require('cookie-parser'); // new
const jwt = require('jsonwebtoken') // new
const bodyParser = require('body-parser')
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const app = express()
app.use(express.json())
app.use(cookieParser()) // new
// app.use(cors())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT"], // Include PUT method
    credentials: true
}))
app.use(bodyParser.json())



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "mycoin"
})

const verifyUser = (req, res, next) => { //New set.
    const token = req.cookies.token;
    if(!token) {
        return res.json({Message: "we need token, pls provide it"})
    }else{
        jwt.verify(token, "our_jsonwebtoken_secret_key", (err, decoded) => {
            if(err){
                return res.json({Message: "Authentication Failed"})
            }else{
                req.username = decoded.username;
                req.user_id = decoded.user_id;
                next();
            }
        } )
    }
}

app.get('/', verifyUser, (req, res) => { //New set
    return res.json({Status: "Success", user_id: req.user_id, username: req.username})
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
            const user = data[0];
            const payload = {
                user_id: user.Id, 
                username: user.username,
                email: user.email
            };
            const token = jwt.sign(payload, "our_jsonwebtoken_secret_key",{expiresIn: '1d'});
            res.cookie('token', token);
            return res.json({status: "Success", username: user.username, user_id: user.id});
        } else {
            return res.json("Fail")
        }       
    })
})


app.post('/Register', (req,res) => {
    res.clearCookie('token');
    return res.json({Status: "Success"})
})

app.get('/Income', verifyUser, (req, res) => {
    const user_id = req.user_id;
    const sql = "SELECT * FROM income WHERE user_id = ?";
    db.query(sql, [user_id], (err, data) => {
        if(err) {
            return res.json('Error')
        } else {
            return res.json(data)
        }  
    })
})

app.get('/Expenses', verifyUser, (req, res) => {
    const user_id = req.user_id;
    const sql = "SELECT * FROM expenses WHERE user_id = ?";
    db.query(sql, [user_id], (err, data) => {
        if(err) {
            return res.json('Error')
        } else {
            return res.json(data)
        }  
    })
})

// -----------------------------------------------------------Income-ADD----------------------------------------------------------


app.post('/CreateIncome', verifyUser, (req, res) => {
    const user_id = req.user_id; 
    const sql = "INSERT INTO income (`Source`, `Income`, `user_id`) VALUES (?, ?, ?)";
    const values = [
        req.body.source,
        req.body.income,
        user_id
    ];
    db.query(sql, values, (err, data) => {
        if(err) {
            return res.json('Error')
        }
        return res.json(data)
    })
})


// -----------------------------------------------------------Income-update----------------------------------------------------------
app.put('/UpdateIncome/:id', verifyUser, (req, res) => {
    const user_id = req.user_id;
    const sql = "UPDATE income SET `Source` = ?, `Income` = ? WHERE In_ID = ? AND user_id = ?";
    const values = [
        req.body.source,
        req.body.income,
        req.params.id,
        user_id
    ];
    db.query(sql, values, (err, data) => {
        if(err) {
            return res.json('Error')
        }
        return res.json(data)
    })
})


// -----------------------------------------------------------Income-Delete----------------------------------------------------------
app.delete('/Income/:id', verifyUser, (req, res) => {
    const user_id = req.user_id;
    const sql = "DELETE FROM income WHERE In_ID = ? AND user_id = ?";
    const id = req.params.id;
    db.query(sql, [id, user_id], (err, data) => {
        if(err) {
            return res.json('Error')
        }
        return res.json(data)
    })
})



// -----------------------------------------------------------Expenses-ADD----------------------------------------------------------
app.post('/CreateExpenses', verifyUser, (req, res) => {
    const user_id = req.user_id;
    const sql = "INSERT INTO expenses (`Method`, `Cost`, `user_id`) VALUES (?, ?, ?)";
    const values = [
        req.body.method,
        req.body.cost,
        user_id
    ];
    db.query(sql, values, (err, data) => {
        if(err) {
            return res.json('Error')
        }
        return res.json(data)
    })
})

// -----------------------------------------------------------Expenses-update----------------------------------------------------------
app.put('/UpdateExpenses/:id', verifyUser, (req, res) => {
    const user_id = req.user_id;
    const sql = "UPDATE expenses SET `Method` = ?, `Cost` = ? WHERE Ex_ID = ? AND user_id = ?";
    const values = [
        req.body.method,
        req.body.cost,
        req.params.id,
        user_id
    ];
    db.query(sql, values, (err, data) => {
        if(err) {
            return res.json('Error')
        }
        return res.json(data)
    })
})


// -----------------------------------------------------------Expenses-Delete----------------------------------------------------------
app.delete('/Expenses/:id', verifyUser, (req, res) => {
    const user_id = req.user_id;
    const sql = "DELETE FROM expenses WHERE Ex_ID = ? AND user_id = ?";
    const id = req.params.id;
    db.query(sql, [id, user_id], (err, data) => {
        if(err) {
            return res.json('Error')
        }
        return res.json(data)
    })
})


// Taking the total sum of income nd expences of the logged user.
app.get('/MyCoinAI', verifyUser, (req, res) => {
    const user_id = req.user_id;
    const incomeQuery = "SELECT SUM(Income) AS totalIncome FROM income WHERE user_id = ?";
    const expenseQuery = "SELECT SUM(Cost) AS totalExpense FROM expenses WHERE user_id = ?";
    
    // Execute both queries in parallel
    db.query(incomeQuery, [user_id], (err1, incomeResult) => {
        if (err1) {
            return res.json('Error')
        }
        const totalIncome = incomeResult[0].totalIncome || 0; // If no income, default to 0
        
        db.query(expenseQuery, [user_id], (err2, expenseResult) => {
            if (err2) {
                return res.json('Error')
            }
            const totalExpense = expenseResult[0].totalExpense || 0; // If no expenses, default to 0
            
            const total = totalIncome - totalExpense;
            return res.json({ total, totalIncome, totalExpense });
        });
    });
});

// The financial inteligent.
app.post('/MyCoinAI', async(req, res) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = req.body.prompt;
  
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      res.json({text})
    } catch (error) {
      console.error('Error generation story', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  })







app.listen(8801, () => {
    console.log('listening');
})