import React from "react";
import imagen1 from '../img/image1.webp';
import imagen2 from '../img/imagen2.webp';
import imagen3 from '../img/imagen3.webp';
import imagen4 from '../img/imagen4.webp';
function Carousel() {
    return (
 
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={imagen1} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={imagen2} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={imagen3} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={imagen4} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
            );
}
export default Carousel;