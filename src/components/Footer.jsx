import React, { Fragment } from "react";
import footercss from "../Footer.module.css";
import { SocialIcon } from "react-social-icons";
import {
  HiChevronRight,
  HiLocationMarker,
  HiMail,
  HiPhone,
} from "react-icons/hi";

const Footer = () => {
  return (
    <Fragment>
      <section className={footercss.footer}>
        <div className={footercss.container}>
          <div className={footercss.row}>
            <div className={footercss.column}>
              <div className={footercss.columncontent}>
                <div className={footercss.logosize}>
                  <h2>Downtown</h2>
                  <p>
                    Lorem here to fill a blank space,brought to you by your boy
                    rachid belfaqih
                  </p>
                </div>
                <ul className={footercss.links}>
                  <li>
                    <a href="#">
                      <SocialIcon
                        className={footercss.icon1}
                        network="facebook"
                        style={{ height: 35, width: 35 }}
                        bgColor="#fd955d"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <SocialIcon
                        className={footercss.icon1}
                        network="twitter"
                        style={{ height: 35, width: 35 }}
                        bgColor="#fd955d"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <SocialIcon
                        className={footercss.icon1}
                        network="instagram"
                        style={{ height: 35, width: 35 }}
                        bgColor="#fd955d"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* COL2 */}
            <div className={footercss.column}>
              <div className={footercss.columncontent}>
                <h2>Comunity</h2>

                <ul>
                  <li>
                    <a className={footercss.aflex} href="#">
                      <span>
                        <HiChevronRight />
                      </span>
                      Search Property
                    </a>
                  </li>
                  <li>
                    <a className={footercss.aflex} href="#">
                      <span>
                        <HiChevronRight />
                      </span>
                      For Agents
                    </a>
                  </li>{" "}
                  <li>
                    <a className={footercss.aflex} href="#">
                      <span>
                        <HiChevronRight />
                      </span>
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* col3 */}
            <div className={footercss.column}>
              <div className={footercss.columncontent}>
                <h2>About Us</h2>

                <ul>
                  <li>
                    <a className={footercss.aflex} href="#">
                      <span>
                        <HiChevronRight />
                      </span>
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a className={footercss.aflex} href="#">
                      <span>
                        <HiChevronRight />
                      </span>
                      Meet The Team
                    </a>
                  </li>{" "}
                  <li>
                    <a className={footercss.aflex} href="#">
                      <span>
                        <HiChevronRight />
                      </span>
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* co4 */}
            <div className={footercss.column}>
              <div className={footercss.columncontent}>
                <h2> Company</h2>

                <ul>
                  <li>
                    <a className={footercss.aflex} href="#">
                      <span>
                        <HiChevronRight />
                      </span>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className={footercss.aflex} href="#">
                      <span>
                        <HiChevronRight />
                      </span>
                      Press
                    </a>
                  </li>{" "}
                  <li>
                    <a className={footercss.aflex} href="#">
                      <span>
                        <HiChevronRight />
                      </span>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a className={footercss.aflex} href="#">
                      <span>
                        <HiChevronRight />
                      </span>
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* col5 */}
            <div className={footercss.column}>
              <div className={footercss.columncontent}>
                <h2> Have A Question?</h2>

                <ul>
                  <li className={footercss.aflex2}>
                    <span className={footercss.icon}>
                      <HiLocationMarker className={footercss.iconcolor} />
                    </span>
                    <span className={footercss.text}>
                      Golf ST. Lake View, San Fransisco,California, USA
                    </span>
                  </li>
                  <li className={footercss.aflex2}>
                    <span className={footercss.icon}>
                      <HiPhone className={footercss.iconcolor} />
                    </span>
                    <span className={footercss.text}>+212 668163877 </span>
                  </li>
                  <li className={footercss.aflex2}>
                    <span className={footercss.icon}>
                      <HiMail className={footercss.iconcolor} />
                    </span>
                    <span className={footercss.text}>
                      belfaqihrachid1@gmail.com
                    </span>
                  </li>
                </ul>
              </div>

              {/* end */}
            </div>
          </div>
          <div className={footercss.footer2}>
            <div className={footercss.footer2container}>
              <p>Copyright @2022 All rights reserved Racid Belfaqih</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
