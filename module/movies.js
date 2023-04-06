const mongoose=require("mongoose");

const MoviesSchema= new mongoose.Schema({
    movieName:{type:String,required:true},
    MovieRatings:{type:Number,required:true},
    ReleasedDate:{type:Date,required:true},
},{
    timestamps:true
})

module.exports=mongoose.model("movie",MoviesSchema);