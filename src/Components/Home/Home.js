import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {
    const [posts ,setPosts] = useState([])
   
    useEffect(()=>{
        fetch ('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
        
    },[])

    return (
        <div style={{backgroundColor:"rgb(33, 220, 100)"}}>
        <h1>Total posts : {posts.length}</h1>
            
         
            {
                posts.map(post => <Posts post={post} key={post.id}></Posts>)
            }   
       
        </div>
    );
};

export default Home;