const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const imageSchema = require('./models/imagepost');
const postSchema = require('./models/instapost');
const bodyParser = require("body-parser");

const multer = require("multer");
// Middlewares
app.use(express.urlencoded());
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname + "/public")))
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
// SET STORAGE
var storage = multer.diskStorage({
    destination: 'uploads', 
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  })
var upload = multer({ storage: storage })

app.post("/upload", upload.single('postImg'), async(req, res)=>{
    try {
                const newImage = new imageSchema({
                    name: req.body.name,
                    image:{
                        data: fs.readFileSync("uploads/" + req.file.filename),
                    }
                })       
        newImage.save().then(() => 
        res.send("successfully uploaded"))
            
        
    } catch (error) {
     
        res.status(400).json({
            status:"failed",
            message: error.message
        })   
    }
})
  
app.post("/post",async(req,res)=>{

    try{
        const data = new postSchema(req.body);
        await data.save();
        res.status(201).json({
            status:"OK",
            data:data
        })
    }catch(error){
        res.status(400).json({
            status:"failed",
            message: error.message
        })
    }
})


app.get("/post",async(req,res)=>{
    const sort = { date: -1 };

    const data = await postSchema.find().sort(sort);
    res.json({
        status:"OK",
        data: data
    })
})

app.get("/image",async(req,res)=>{
    const sort = { date: -1 };

    const data = await imageSchema.find().sort(sort);
    res.json(
         data
    )
})


module.exports = app;



