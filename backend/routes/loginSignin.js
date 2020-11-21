const cors = require("cors")
const passport = require("passport")
const mongoose = require("mongoose")
const passportLocal = require("passport-local").Strategy
const cookieParser = require("cookie-parser")
const bcrypt = require("bcryptjs")
const session = require("express-session")
const {use} = require("passport")
const bodyParser = require("body-parser")

const User = require('./userModel')

function loginSignin(app) {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }))
    app.use(cors({
        origin: "http://localhost:3000",
        credentials: true
    }))
    app.use(session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true
    }))
    app.use(cookieParser("secretcode"))
    app.use(passport.initialize())
    app.use(passport.session())
    require('./passportConfig')(passport)


    // Routes
    app.post("/zaloguj", (req, res, next) => {
        console.log(req.body)
        passport.authenticate("local", (err, user, info) => {
            if (err) throw err
            if (!user) res.send("Uzytkownik nie istnieje")
            else {
                req.logIn(user, err => {
                    if (err) throw err
                    res.send('Zalogowano')
                })
            }
        })(req, res, next)
    })

    app.post("/zarejestrujsie", (req, res) => {
        console.log(req.body)

        User.findOne({
            username: req.body.username.trim()
        }, async (err, doc) => {
            if (err) throw err
            if (doc) throw res.send("User Already Exists")
            const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;            
            if (!reg.test(req.body.email.trim())) throw res.json({emailCorrect: 'false'})

            
            if (!doc) {
                const hashPassword = await bcrypt.hash(req.body.password, 10)
                console.log(hashPassword)
                const newUser = new User({
                    username: req.body.username,
                    password: hashPassword,
                    email: req.body.email.trim(),
                    isDeleted: false,
                    date: new Date().toJSON()
                })
                await newUser.save()
                res.send("User Created!")
            }
        })
    })


    app.post("/user", (req, res) => {
        console.log(req.body)
    })
}

module.exports = loginSignin