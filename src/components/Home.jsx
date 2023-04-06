import React, { useEffect, useState } from 'react'
import './Home.css';
import image1 from '../images/Avengers.jpeg'
import star from '../images/star.jpeg'
import axios from 'axios'
import moment from 'moment'
import {  useNavigate } from 'react-router-dom';


const Home = () => {
const [moviesData,setMoviesData]=useState([]);
const navigate=useNavigate();

useEffect(()=>{
    axios.get("http://localhost:9595/movies")
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
<div className='container'>
    {
        moviesData.map((data)=>{
            return(
                <>
<div className='movieContainer'>
    <div><img src={image1} alt="" /></div>
<div className='row'>
<h5>{data.movieName}</h5>

<div className='rating'><div><img className='star' src={star} alt="" /></div> <div>{data.MovieRatings}</div></div> 
<h6>Released Date:{moment(data.ReleasedDate).format("DD-MM-YYYY")}</h6>
<button onClick={()=>navigate(`/viewdetails/${data._id}`)}>View Details</button>
</div>


</div>
                </>
            )
        })
    }

</div>




</>
  )
}

export default Home