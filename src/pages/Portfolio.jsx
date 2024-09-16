import React from "react";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-section pt-5 my-lg-5 my-0">
      <div className="container">
        <h1 className="text-center pb-3">My Skills</h1>
        <div className="skill-list row">
          <div className="card skill col-lg-2 ">
            <img src="/images/htmlColor.png" alt="" className="card-img-top" />

            <div className="skill-percentage">95%</div>
            <h5 className="skill-name">HTML</h5>
          </div>
          <div className="card skill col-lg-2 ">
            <img src="/images/css-3.png" alt="" className="card-img-top" />
            <div className="skill-percentage">80%</div>
            <h5 className="skill-name">css</h5>
          </div>
          <div className="card skill col-lg-2 ">
            <img
              src="/images/bootstrap (1).png"
              alt=""
              className="card-img-top"
            />
            <div className="skill-percentage">98%</div>
            <h5 className="skill-name">bootstrap</h5>
          </div>
          <div className="card skill col-lg-2 ">
            <img src="/images/tailwind.png" alt="" className="card-img-top" />
            <div className="skill-percentage">75%</div>
            <h5 className="skill-name">tailwind</h5>
          </div>
          <div className="card skill col-lg-2 ">
            <img
              src="/images/java-script.png"
              alt=""
              className="card-img-top"
            />
            <div className="skill-percentage">75%</div>
            <h5 className="skill-name">javascript</h5>
          </div>
          <div className="card skill col-lg-2 ">
            <img src="/images/react-js.png" alt="" className="card-img-top" />
            <div className="skill-percentage">92%</div>
            <h5 className="skill-name">react js</h5>
          </div>

          <div className="card skill col-lg-2 ">
            <img src="/images/node-js.png" alt="" className="card-img-top" />
            <div className="skill-percentage">78%</div>
            <h5 className="skill-name">node js</h5>
          </div>
          <div className="card skill col-lg-2 ">
            <img src="/images/Mongodb.png" alt="" className="card-img-top" />
            <div className="skill-percentage">80%</div>
            <h5 className="skill-name">mongodb</h5>
          </div>
          <div className="card skill col-lg-2 ">
            <img
              src="/images/express.png"
              alt=""
              className="card-img-top express-img"
            />
            <div className="skill-percentage">80%</div>
            <h5 className="skill-name">express js</h5>
          </div>
          <div className="card skill col-lg-2 ">
            <img src="/images/socket.png" alt="" className="card-img-top" />
            <div className="skill-percentage">68%</div>
            <h5 className="skill-name">Socket.io</h5>
          </div>
          <div className="card skill col-lg-2 ">
            <img src="/images/git.png" alt="" className="card-img-top" />
            <div className="skill-percentage">70%</div>
            <h5 className="skill-name">git</h5>
          </div>
        </div>

        <Projects />
      </div>
    </div>
  );
};

export default Portfolio;
