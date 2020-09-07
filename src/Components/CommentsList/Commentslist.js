import React from 'react';
import './CommentList.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const Commentslist = (props) => {
    return (
        <div className="comment-list">
            <Card className="comment-card">
                <CardActionArea>
                   
                    <img className="img"src="https://source.unsplash.com/random" alt="lets ho" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <strong>user name</strong>  {props.comment.name}
                            <br/>
                            <h4>Email</h4>{props.comment.email}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <h5>Comments</h5>  {props.comment.body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
        </Card>
             
        </div>
    );
};

export default Commentslist;