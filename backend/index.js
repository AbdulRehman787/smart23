const express = require("express")
const mysql = require("mysql")
const app = express();
const cors = require("cors")
const port = 8080;
const bodyparser = require("body-parser")
const multer = require('multer')





app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


const db = mysql.createConnection({
    host: "localhost",
    password: "",
    database: "smartbakery",
    user: "root"
})

db.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("Database connected")
})

app.get("/", (req, res) => {
    res.send("Hello World")
})




// user signin code start point
app.post("/register", (req, res) => {
    const sql = "INSERT INTO `singup`(`name`, `email`, `phoneNo`, `address`, `password`, `cpassword`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.phoneNo,
        req.body.address,
        req.body.password,
        req.body.cpassword,
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json({ Error: "Inserting  data error in Server" })
        }
        return res.json({ Status: "Success" });
    })
})
// user signin code start end point


///////////


// Active  user account start point
app.post("/activeUser", (req, res) => {
    const sql = "INSERT INTO `activeuser`(`name`, `email`, `phoneNo`, `address`, `password`, `cpassword`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.phoneNo,
        req.body.address,
        req.body.password,
        req.body.cpassword,
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json({ Error: "Inserting  data error in Server" })
        }
        return res.json({ Status: "Success" });
    })
})
// Active  user account end point



//////////////

// Login user account start point
app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    db.query("SELECT * FROM singup WHERE email = ? AND password = ?", [email, password], (err, result) => {
        if (err) {
            res.send({ err: err })
        } if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ message: "Wrong username / password combination" })
        }
    })
})
// Login user account end point




//////////////////



// get user account data start point
app.get('/register', (req, res) => {
    db.query("SELECT * FROM `singup` ", (err, result, fields) => {
        if (err) {
            throw err;
        }
        else {
            res.send(result)
        }
    })
})
// get  user account data end point


/////////////


// forget password with backend code start point
app.post("/forgetPassword", (req, res) => {
    const email = req.body.email
    db.query("SELECT * FROM singup WHERE email = ?", [email], (err, result) => {
        if (err) {
            res.send({ err: err })
        } if (result) {
            res.send(result)
        } else {
            res.send({ message: "Wrong email" })
        }
    })
});

// forget password with backend code end pont


///////////



// Delete user account start point
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;

    // Delete user from the database
    db.query('DELETE FROM singup WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: 'Failed to delete user account' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'User account not found' });
        }

        return res.json({ success: true, message: 'User account deleted successfully' });
    });
});
// Delete user account endpoint
/////

// Appprove user account start point
app.put('/users/:id/approve', (req, res) => {
    const userId = req.params.id;
    const query = `UPDATE singup SET approved = 1 WHERE id = ${userId}`;

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error approving user:', error);
            res.status(500).json({ error: 'Failed to approve user.' });
            return;
        }

        res.json({ message: 'User approved successfully.' });
    });
});;

// Appprove user account end point


////


// img storage confing
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        db(null, 'public/images')
    },
    filename: (req, file, db) => {
        db(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})

//////



// add  product start point


app.post("/product", (req, res) => {
    const sql = "INSERT INTO `products`(`name`, `price`, `image`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.price,
        req.body.image,
    ]
    db.query(sql, [values], function (error) {
        if (!error) {
            return res.json({ "status": 201, "message": "Product added successfully" })
        }
    }
    )
})


// add  product start point

///////

// document submit data start point

app.post('/documents', (req, res) => {
    const sql = "INSERT INTO `documents`(`name`, `imageurl`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.imageurl,
    ]
    db.query(sql, values, (err, data) => {
        if (err) {
            console.log(err)
        }
        console.log("data was add")
    })
})

app.post("/image", (req, res) => {
    const sql = "INSERT INTO `image`(`imageurl`) VALUES (?)"
    const values = [
        req.body.imageurl
    ]
    db.query(sql, values, (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log("Url was add")
    })
})

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`Server is running on localhost${port}`)
})