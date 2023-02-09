import React from 'react';
import { NavLink } from 'react-router-dom';

const Common=(props)=>
{
    return(
        <>
        <section id='header' className="d-flex align-items-center justify-content-center ">
          <div className="container-fluid nav_bg ">
           <div className="row">
             <div className="col-10 mx-auto">
             <div className='row' >
               <div className=' mt-4 col-lg-6 col-12 mx-auto pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
                     <h1 className=''>{props.title}<strong className="brand-name">Vishu100</strong></h1>
                     <h2 className='my-3'>We are the team of talented devloper making websites</h2>
                     <div className='mt-3'>
                        <NavLink to={props.visit} className="btn-get-started">{props.btn}</NavLink>
                     </div>
                </div>

                <div className='col-lg-6 col-12 mx-auto  order-1 order-lg-2 header-img d-flex justify-content-center align-items-center'>
                   <img src={props.imgsrc} className='img-fluid animated' alt='image1' />
                </div>
                </div>
             </div>
           </div>
        </div>
        </section>
        </>
    )
}
export default Common;