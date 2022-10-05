import { Fragment, useState } from "react";
import React from "react";
import countercss from "../CounterPage.module.css";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

const CounterPage = ({className,...rest}) => {
    const [viewPortEntered,setViewPortEntered] = useState();
  return (
    <Fragment>
      <section className={countercss.counter}>
        <div className={countercss.container}>
          <div className={countercss.row}>
            {/*column1*/}
            <div className={countercss.column}>
              <strong>
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={305}>
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className={countercss.number} ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </strong>
              <span>
                Area <br /> Population
              </span>
            </div>
            {/*column2*/}
            <div className={countercss.column}>
              <strong>
                <CountUp
                  {...rest}
                  start={viewPortEntered ? null : 0}
                  end={1024}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className={countercss.number} ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </strong>
              <span>
                Area <br /> Population
              </span>
            </div>
            {/*column3*/}
            <div className={countercss.column}>
              <strong>
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={206}>
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className={countercss.number} ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </strong>
              <span>
                Area <br /> Population
              </span>
            </div>
            {/*column4*/}
            <div className={countercss.column}>
              <strong>
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={27}>
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className={countercss.number} ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </strong>
              <span>
                Area <br /> Population
              </span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CounterPage;
