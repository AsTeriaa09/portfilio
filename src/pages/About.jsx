import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdDownload } from "react-icons/io";

const About = () => {
  useEffect(() => {
    const leftCols = document.querySelectorAll(".left-col");

    const handleScroll = () => {
      leftCols.forEach((col, index) => {
        const top = col.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          setTimeout(() => {
            col.classList.add("visible");
          }, index * 200);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="about" className="about-section">
      <div className="container mt-5">
        <h1 className=" text-center mb-5">
          ABOUT <span className="text-warning">ME</span>{" "}
        </h1>
        <div className="row">
          <div className="col-lg-6 about-left ps-lg-0 ps-5">
            <p className="about-para">
              Hello! My name is Sultana Rupa. I am a very dedicated and
              enthusiastic web developer. I have acquired the skills necessary
              to build great and premium websites.
            </p>
            <p>
              {" "}
              <span className="about-title-text"> Name </span> : Sultana Rupa{" "}
            </p>
            <p>
              {" "}
              <span className="about-title-text"> Age </span> : 20 years{" "}
            </p>
            <p>
              {" "}
              <span className="about-title-text"> Address </span> :
              Dhaka,Bangladesh{" "}
            </p>
            <p>
              {" "}
              <span className="about-title-text"> Email </span> :
              mahiraakhter950@gmail.com{" "}
            </p>
            <p>
              {" "}
              <span className="about-title-text"> Languages </span> : Bangla ,
              English , Hindi , Basic Spanish{" "}
            </p>
            <div className="mt-2">
              {/* <button className="btn btn-outline-warning text-light">
                Download CV{" "}
                <span className="btn-arrow">
                  {" "}
                  <IoMdDownload />{" "}
                </span>
              </button> */}
              <a href="/pdf/cv.pdf" download className="btn btn-outline-warning text-light">
                Download CV
                <span className="btn-arrow">
                  <IoMdDownload />
                </span>
              </a>
            </div>
          </div>
          <div className="about-right col-lg-6 ms-lg-0 ms-5">
            <div className="display">
              <div className="left-col me-lg-5">
                <h1 className="text-warning">2+</h1>
                <p>___Years of experience</p>
              </div>
              <div className="left-col">
                <h1 className="text-warning">30+</h1>
                <p>___Completed Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
