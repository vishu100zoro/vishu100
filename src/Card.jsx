import React from "react";

const Card = (props) => {
    return (
        <>
            <div class="card m-2 col-md-4 col-10 mx-auto " style={{ width: "18rem" }}>
                <img src={props.img} class="card-img-top imgh" alt="service img" />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a target="_blank" rel="noreferrer" href="https://zesty-donut-2bdcd6.netlify.app/index.html" class="btn btn-primary">See More</a>
                </div>
            </div>
        </>
    )
}
export default Card;