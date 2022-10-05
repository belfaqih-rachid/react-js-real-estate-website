import React, { Fragment, useEffect, useState } from "react";
import workcss from "../Work.module.css";
import WorkDetails from "../detail/WorkDetails";
import Aos from "aos";
import 'aos/dist/aos.css'

const Work = () => {
    const [works, setWorks] = useState(WorkDetails);
    useEffect(()=>{
        Aos.init({duaration:2000,once:true,easeing:'ease'})
    },[])
  return (
    <Fragment>
      <section className={workcss.work}>
        <div className={workcss.overlay}></div>
        <div data-aos="fade-down"  className={workcss.workcontainer}>
          <div className={workcss.workheading}>
            <span>Work Flow</span>
            <h2>How It Work</h2>
          </div>
          <div className={workcss.column1}>
            <div className={workcss.workrow}>
              {works.map((item) => (
                <div className={workcss.workcard}>
                  <div className={workcss.workcolumn}>
                    <div className={workcss.content}>
                      <div className={workcss.number}>
                        <span>{item.number}</span>
                      </div>
                      <div className={workcss.workcontent}>
                        <h3>{item.heading}</h3>
                        <p>{item.info}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Work;
