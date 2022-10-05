import React, { Fragment, useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import workercss from "../Accordion.module.css";
import questions from "../detail/WorkerProfileDetails";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import pic from "../images/linkedin-headshot-photography-examples-6-1.jpg";
import Aos from "aos";
import 'aos/dist/aos.css'

const Accordion = () => {
  const [question, setQuestion] = useState(questions);
  useEffect(()=>{
    Aos.init({ duration: 2000, twice:'true',easing: "ease" });
  },[])
  return (
    <Fragment>
      <section className={workercss.worker}>
        <div className={workercss.workerrow}>
          <div data-aos="fade-left" className={workercss.left}>
            <h3>Frequently Ask</h3>
            {question.map((item) => (
              <div className={workercss.leftcontent}>
                <Collapsible
                  className={workercss.collapsible}
                  trigger={[
                    <HiChevronUp className={workercss.icon} />,
                    item.question,
                  ]}
                  triggerWhenOpen={[
                    <HiChevronDown className={workercss.icon} />,
                    item.question,
                  ]}
                >
                  <p className={workercss.contentshow}>{item.answer}</p>
                </Collapsible>
              </div>
            ))}
          </div>
          <div data-aos="fade-right" className={workercss.right}>
            <img src={pic} alt="personne" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Accordion;
