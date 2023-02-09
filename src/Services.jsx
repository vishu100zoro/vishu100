import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
const Services = () => {
    return (
        <>
            <div className="container-fluid nav_bg ">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <h1  className='text-center py-4'>Our Services</h1>
                        <div className='row pt-3' >
                           
                            {
                                Sdata.map((value,index)=>{
                                     return <Card
                                        img={value.imgsrc}
                                        title={value.title}

                                     />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services;