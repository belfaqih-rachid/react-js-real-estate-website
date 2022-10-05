import React, { Fragment, useState } from "react";
import AgentDetails from "../detail/AgentDetails";
import agentcss from "../AgentPage.module.css";
import { SocialIcon } from "react-social-icons";

const AgentPage = () => {
  const [agentdetail, setAgentDetail] = useState(AgentDetails);
  return (
    <Fragment>
      <section className={agentcss.agents}>
        <div className={agentcss.heading}>
          <span>Agents</span>
          <h2>Our Agents</h2>
        </div>
        <div className={agentcss.row}>
          {agentdetail.map((item) => (
            <div className={agentcss.column}>
              <div className={agentcss.card}>
                <div className={agentcss.thumb}>
                  <img src={item.image} alt="" />
                  <div className={agentcss.sociallink}>
                    <ul>
                      <li>
                        <a href="#">
                          <SocialIcon
                            network="facebook"
                            style={{ height: 35, width: 35 }}
                            bgColor="#fff"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <SocialIcon
                            network="linkedin"
                            style={{ height: 35, width: 35 }}
                            bgColor="#fff"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <SocialIcon
                            network="google"
                            style={{ height: 35, width: 35 }}
                            bgColor="#fff"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={agentcss.info}>
                  <h3>{item.name}</h3>
                  <p>{item.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default AgentPage;
