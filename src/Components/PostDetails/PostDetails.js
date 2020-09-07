import React, { useState, useEffect, createContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PostDetails.css'
import Box from '@material-ui/core/Box';
import Comments from '../Comments/Comments';
import { Button } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';


export const commentContext = createContext()
const PostDetails = () => {
    const {details} = useParams();
    const [data,setData] = useState({})
    useEffect(()=>{
        const url= `https://jsonplaceholder.typicode.com/posts/${details}`
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    },[])
   
    const number = data.userId
console.log(number);
    return (
        
        <div className="details-container">
            
           
            <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
            <div className="details-data">
                <h1> <strong>ID  :</strong> {data.id}</h1>
                <p> <strong>Title of Post :</strong> {data.title}</p> <br/>
                <p><strong>Body :</strong>{data.body}</p>
                <Link to = '/'><Button  variant="outlined" color="primary">Back To Home <br/> <SvgIcon >
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon></Button> </Link> 
               
              
            </div>
            </Box>
           
           <Comments data ={number}></Comments>
           
            
        </div>
       
    );
};

export default PostDetails;