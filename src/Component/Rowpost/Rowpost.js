import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios/axios'
import {imageUrl,API_KEY} from '../../Constants/Constants'
import Youtube from 'react-youtube';

function Rowpost(props) {
  const [movies,setMovies]=useState([])
 const [urlId,setUrlId]= useState('')
  useEffect(()=>{
    axios.get(props.urls).then((response)=>{
     
      setMovies(response.data.results)
    })
  })
  const opts = {
    height: '390',
    
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
const handleMovie=(id)=>{
console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data)
    if(response.data.results.length !== 0){
      setUrlId(response.data.results[0])
    }else{
      alert('no video is available')
    }
  })
}
  return (
    <div className='Row'>
      <h1>{props.title}</h1>
      <div className="poster">
      {movies.map((obj,index)=>{
          return(
           
        <img key={index} onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'small':"pos"} src={ imageUrl+obj.backdrop_path } alt="" />
        
    )
      })}</div>
  {urlId && <Youtube videoId={urlId.key} opts={opts}/>}
      
    </div>
  )
}

export default Rowpost
