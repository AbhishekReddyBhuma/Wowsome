const express = require("express");
// const path = require("path");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
// const PORT = process.env.PORT || 8080;
const URL = "mongodb+srv://Abhishek:Abhishek@cluster0.mjob4sx.mongodb.net/wowsome?retryWrites=true&w=majority&appName=Cluster0";
const Products = require("./models/productsModel");
const verifyToken = require("./middleware/verifyToken");

const multer = require("multer");
const upload = multer({ dest: 'uploads/images'});

app.use(express.json());
app.use(cors());
app.get("/",(req,res) => {
    res.send("Hello");
});

app.use("/images",express.static(__dirname + "/uploads/images"));

app.post("/api/v1/add", upload.single("image") ,async (req, res) => {
    console.log(req.file)
    console.log(req.body)
    const {name,description,price,category,inStock,width,height,depth,weight} = req.body
    try {
        const product = await Products.create({
            name,description,price,category,inStock,width,height,depth,weight,image:`/images/${req.file.filename}`
        })
        console.log(product);
      res.status(200).json({success:true,product});
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

mongoose.connect(URL).then(console.log("Connected"));

app.listen(PORT, () => console.log(`App listening on ${PORT}`));