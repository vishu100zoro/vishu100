import React from 'react';
import img from './img1.jpg'
import Common from './Common';
const Home=()=>
{
    return(
        <>
       <Common
        title="Grow your business with "
        imgsrc={img}
        visit="/services"
        btn="Get started"
       />
        </>
    )
}
export default Home;