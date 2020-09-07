import React from 'react';
import './Posts.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
const Posts = (props) => {
    
    const {id,title,body,} =props.post
    
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;
    return (
        <div className="card">
         
        <Grid item xs={3}>
        <Card className={classes.root} id ="card-body">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        ID : {id}
        </Typography>
        <Typography variant="h5" component="h2">
        {title}
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
    <Link to={`/post/${id}`}><Button   variant="outlined" color="primary" id="btn">See More</Button></Link>  
      </CardActions>
    </Card>
        </Grid>
            
        </div>
    );
};

export default Posts;