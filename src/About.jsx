import React from 'react';
import Common from './Common';
import img from './img2.png'
const About=()=>
{
    return(
        <>
         <Common
        title="Welcome to About page of "
        imgsrc={img}
        visit="/contact"
        btn="Contact Us"
       />
        </>
    )
}
export default About;