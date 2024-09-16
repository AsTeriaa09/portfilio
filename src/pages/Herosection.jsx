import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <div className="hero-section mt-lg-5 mt-0 ms-lg-5 ms-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 ps-5 mt-5">
            <h1>
              {" "}
              __ I'm{" "}
              <span className="hero-header typing-text text-warning">
                Sultana Rupa
              </span>{" "}
            </h1>
            <h4 className="ps-5">Web Developer</h4>
            <p className=" hero-para pt-2">
              A passionate web developer , skilled in mern stack , with a knack
              for creating engaging and efficient web applications. I'm Crafting
              seamless and dynamic web experiences with elegance and simplicity.
            </p>
            <Link to="mailto: mahiraakhter950@gmail.com">
              <button className="btn btn-outline-warning text-light">
                Hire me{" "}
                <span className="btn-arrow">
                  {" "}
                  <FaArrowRightLong />{" "}
                </span>
              </button>
            </Link>
          </div>
          <div className="col-lg-5 ps-0 pt-lg-0 pt-5">
            <img
              src="/images/rupa.png"
              alt="portfolio image"
              className="slide-in-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
