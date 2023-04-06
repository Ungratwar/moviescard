import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import image1 from '../images/Avengers.jpeg'
import moment from 'moment'

const Viewdetails = () => {
    const [moviesData,setMoviesData]=useState([]);
    const {movieId}=useParams();
const navigate=useNavigate();

useEffect(()=>{
    axios.get(`http://localhost:9595/movies/${movieId}`)
    .then(async(res)=>{
        const data=await res.data;
        setMoviesData(data);
        console.log(res.data);

    })
    .catch((err)=> console.log(err));
},[])

console.log(moviesData);

  return (
    <>
   
    <div className='container2'>
    {
        moviesData.map((data)=>{
            return(
                <>
<div className='movieContainer2'>
    <div><img className='image' src={image1} alt="" /></div>
<div className='row'>
<h5>{data.movieName}</h5>
<small>Ratings:{data.MovieRatings}</small>
<h6>Released Date:{moment(data.ReleasedDate).format("DD-MM-YYYY")}</h6>

</div>
<button onClick={()=>navigate(`/`)} >Back</button>


</div>
                </>
            )
        })
    }

</div>
    
    
    </>
  )
}

export default Viewdetails