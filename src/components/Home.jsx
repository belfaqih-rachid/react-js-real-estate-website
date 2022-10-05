import React, { Fragment } from "react";
import home from "../Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <section className={home.home}>
        <div className={home.container}>
          <h1>We Construct rachid</h1>
          <p>
            lorem is a lorem page as lorem said to lorem orem is a lorem page as
            lorem said to lorem orem is a lorem page as lorem said to lorem
          </p>
          <div className={home.link}>
            <a href="#" id="" className={home.explore}>
              Explore
            </a>
            <a href="#" className={home.contact}>
              Contact
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
