import React, { useState, useEffect } from 'react';
import Commentslist from '../CommentsList/Commentslist';
import { useParams } from 'react-router-dom';
import './Comments.css'

const Comments = () => {
   const {details} = useParams();

    const [comments, setComments] = useState([])
    useEffect(()=>{ 
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${details}`)
        .then(res => res.json())
        .then(data => setComments(data))
        
    },[])
    ;
   
    return (
        <div className="comment">
         {
             comments.map(comment=> <Commentslist comment={comment}></Commentslist>)
         }
           
        </div>
    ); 
};

export default Comments;