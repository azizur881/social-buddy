import React from 'react';
import './Heading.css'
import Box from '@material-ui/core/Box';


const Heading = () => {
    return (
        <div className="heading">
           
           <Box textAlign="center" fontWeight="fontWeightBold" fontSize={42} >Social Buddy </Box> 
        
        </div>
    );
};

export default Heading;