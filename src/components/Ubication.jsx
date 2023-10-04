import React from "react";

function Ubication() {
    return (
        <div className="container">
            <br/>
            <section className="text-center">
                <h3 className="mb-5">Contactenos</h3>

                <div className="row">
                    <div className="col-lg-7">
                        <iframe title="leon" src="https://www.google.com/maps/place/Chinandega/@12.6234184,-87.1427826,15z/data=!4m6!3m5!1s0x8f70f1ec32d7ec3f:0x53e0a1538f9602ec!8m2!3d12.6234721!4d-87.1273253!16zL20vMDc4dDB2?entry=ttu" className="h-100 w-100" style={{ border: 0 }} allowfullscreen="" loading="lazy"/>
                    </div>


                    <div className="col-md-5">
                        <ul className="list-unstyled">
                            <li>
                                <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                                <p><small>chinandega, Nicaragua</small></p>
                            </li>
                            <li>
                                <i className="fas fa-phone fa-2x text-primary"></i>
                                <p><small>+ 01 234 567 89</small></p>
                            </li>
                            <li>
                                <i className="fas fa-envelope fa-2x text-primary"></i>
                                <p><small>contact@gmail.com</small></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <br/>
        </div>

    );
}
export default Ubication;