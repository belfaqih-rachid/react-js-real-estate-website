import React, { Fragment, useState, useEffect } from "react";
import { HiLocationMarker } from "react-icons/hi";
import PropertyDetails from "../detail/PropertyDetails";
import property from '../Property.module.css'
import Aos from "aos";
import 'aos/dist/aos.css'
const PropertyPage = () => {
  const [detail, setDetail] = useState(PropertyDetails);
  useEffect(() => {
    Aos.init({ duration: 2000, easing: "ease" });
  }, []);
  return (
    <Fragment>
      <section className={property.property}>
        <div className={property.center}>
          <h3>Popular Properties</h3>
        </div>
        <div className={property.row}>
          {detail.map((item, id) => (
            <div data-aos="fade"  className={property.column}>
              <div className={property.singleproperty}>
                <div className={property.card}>
                  <div className={property.propertythumb}>
                    <div className={property.propertytag}>For Sale</div>
                    <img src={item.image} alt="" />
                  </div>
                  <div className={property.propertycontent}>
                    <h3>{item.heading}</h3>
                    <div className={property.mark}>
                      <HiLocationMarker />
                      <span>{item.span}</span>
                    </div>
                    <span className={property.amount}>{item.amount}</span>
                  </div>
                  <div className={property.propertyfooter}>
                    <ul>
                      <li>
                        <span>{item.size}</span>
                      </li>
                      <li>
                        <HiLocationMarker />
                        <span>{item.bed}</span>
                      </li>
                      <li>
                        <HiLocationMarker />
                        <span>{item.bath}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={property.moreproperties}>
          <a href="" className={property.propertybtn}>
            More Properties
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default PropertyPage;
