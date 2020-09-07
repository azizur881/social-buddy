import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Heading from './Components/Heading/Heading';
import Home from './Components/Home/Home';
import PostDetails from './Components/PostDetails/PostDetails';
import Comments from './Components/Comments/Comments';
import Commentslist from './Components/CommentsList/Commentslist';
import Notfound from './Notfound/Notfound';





function App() {
  return (
    <div>
      <Heading></Heading>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path ="/home">
            <Home/>
          </Route>
          <Route path="/post/:details">
            <PostDetails/>
          </Route>
          <Route path="*">
            <Notfound/>
          </Route>
          
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
