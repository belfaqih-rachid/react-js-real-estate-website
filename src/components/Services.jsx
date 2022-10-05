import React, { Fragment, useEffect, useState } from "react";
import ServicesDetails from "../detail/ServicesDetails";
import servicecss from "../Services.module.css";
import 'aos/dist/aos.css'
import Aos from "aos";

const Services = () => {
  const [services, setservices] = useState(ServicesDetails);
  useEffect(()=>{

    Aos.init({duration:2000,easing:'ease'})

  },[])
  return (
    <Fragment>
      <section data-aos='fade-up' className={servicecss.services}>
        <div className={servicecss.heading}>
          <span>Our Services</span>
          <h2>The Smartest Way To buy A Home</h2>
        </div>
        <div className={servicecss.servicesrow}>
          {services.map((item) => (
            <div className={servicecss.servicescard}>
              <div className={servicecss.servicescolumn}>
                <div className={servicecss.content}>
                  <div className={servicecss.servicesicon}>{item.image}</div>
                  <div className={servicecss.servicescontent}>
                    <h3>{item.heading}</h3>
                    <p>{item.info}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};
export default Services;
