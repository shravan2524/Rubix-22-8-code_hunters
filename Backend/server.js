const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
const path = require('path');
var user = require("./Models/User");
const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://shravan:ravilata@cluster0.yyer7.mongodb.net/Hackathon?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Database connected');
});
app.post("/api/addtowishlist", (req, res) => {
    console.log(req.body.e);
})

app.post("/api/signup", (req, res) => {
    console.log(req.body);
    
    let newUser = new user({
        email: req.body.email,
        name: req.body.name,
        password : req.body.password,
    })

    let query = {email : req.body.email};

    user.findOne(query)
    .then((e)=>{
        console.log(e);
        if(e){
            console.log("email already register");
            res.send("email already register")
        }
        else{
            console.log("email not register");
            newUser.save()
            .then((e)=>{
                console.log("Added succesfully");
                res.send("Added succesfully");
            })
            .catch((err) => console.log(err));
        }
    })
    .catch((err) => console.log(err));

    console.log(newUser);
})


app.post("/api/login", (req, res) => {
    console.log(req.body);
    let query = {email : req.body.email,password:req.body.password};
    user.findOne(query)
    .then((e)=>{
        console.log(e);
        if(e){
            console.log("Login Successfully");
            res.send("Login Successfully")

        }
        else{
            console.log("Invalid Email Id / Password");
            res.send("Invalid Email Id / Password")

        }
    }
    )
})




app.listen(port, () => console.log('server running..'));