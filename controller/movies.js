const MoviesModel=require("../module/movies");


exports.CreateData=async(req,res)=>{
    try{
        const MovieData= await new MoviesModel(req.body).save();
        res.status(200).json(MovieData);
    }
    catch(err){
        res.status(500).json(err);
    }
}

exports.getAllData=async(req,res)=>{
    try{
        const MovieData= await MoviesModel.find()
        res.status(200).json(MovieData);
    }
    catch(err){
        res.status(500).json(err);
    }
}

exports.getDataById=async(req,res)=>{
    try{
        const MovieData= await MoviesModel.find({_id:req.params.movieId})
        res.status(200).json(MovieData);
    }
    catch(err){
        res.status(500).json(err);
    }
}

exports.EditData=(req,res)=>{
    MoviesModel.findOneAndUpdate({_id:req.params.Id},req.body,{new:true},(err,data)=>{
        if(err){
            res.status(500).json(err)
        }
        else{
            res.status(200).json(data)
        }
    })
}

exports.DeleteData=(req,res)=>{
    MoviesModel.findByIdAndDelete({_id:req.params.movieId},(err,data)=>{
        if(err){
            res.status(500).json(err)
        }
        else{
            res.status(200).json(data)
        }
    })}