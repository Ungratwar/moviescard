const express=require("express");
const app=express();
const db=require("./db");
const cors=require("cors")

const PORT= 9595;


db.connection.on("connected",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("connected to DataBase");
    }
})

app.use(cors());
app.use(express.json());
app.use("/movies",require("./routes/movies"));

app.listen(PORT,()=>{
    console.log(`Connected to server at port ${PORT}`)
});