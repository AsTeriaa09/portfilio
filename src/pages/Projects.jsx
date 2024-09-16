import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects-section pt-lg-5 pt-0">
      <h1 className=" text-center my-5">
        MY <span className="text-warning">PROJECTS</span>{" "}
      </h1>
      <div className="row d-flex  justify-content-between pt-3 text-center ps-lg-5 ps-0 ms-lg-5 ms-0">
        <div className="col-lg-6 col-12">
          <div class="slide-in-bottom card">
            <img
              src="images/ChatterBox.jpeg"
              class="card-img-top"
              alt="project-img"
            />
            <div class="card-body text-start">
              <h4 class="card-title">ChatterBox</h4>
              <p class="card-text">
                A dynamic chat application built with the MERN stack and
                Socket.IO, featuring real-time one-on-one messaging, group
                chatting, and user search functionality.ChatterBox provides
                secure authentication and full CRUD operations.
              </p>
              <Link
                to="https://github.com/AsTeriaa09/mern_socket_chat_app"
                className="project-repo-link"
                target="_blank"
              >
                See more
              </Link>{" "}
            </div>
          </div>
        </div>

        <div className=" col-lg-6 col-12 ps-lg-5 ps-0">
          <div class="slide-in-bottom card">
            <img
              src="images/project-1.jpeg"
              class="card-img-top"
              alt="project-img"
            />
            <div class="card-body text-start">
              <h4 class="card-title">Technism</h4>
              <p class="card-text">
                An interactive e-commerce platform built with React.js,
                featuring dynamic UI elements, advanced filtering and sorting
                options, grid and column item views, seamless add-to-cart
                functionality, and full CRUD operations.{" "}
              </p>
              {/* <a href="#" class="btn btn-primary">see more</a> */}
              <Link
                to="https://github.com/AsTeriaa09/React-bootstrap-crud-ecommerce"
                className="project-repo-link"
                target="_blank"
              >
                See more
              </Link>{" "}
            </div>
          </div>

          {/* <div className="project-body text-start">
            <h4>Technism</h4>
            <p>An interactive e-commerce platform built with React.js, featuring dynamic UI elements, advanced filtering and sorting options, grid and column item views, seamless add-to-cart functionality, and full CRUD operations. </p>
            <p>It is Designed to provide a smooth and efficient user experience, Technism combines modern design with robust functionality to meet the needs of online shoppers</p>
            <Link
              to="https://github.com/AsTeriaa09/React-bootstrap-crud-ecommerce"
              target="_blank"
              className="project-view-link"
            >
              View Project <FaLongArrowAltRight />
            </Link>
          </div> */}
        </div>
      </div>
      <div className="projects-link d-flex align-items-center">
        <h4>
          <Link
            to="https://github.com/AsTeriaa09?tab=repositories"
            className="repo-link"
            target="_blank"
          >
            View all projects <FaLongArrowAltRight />{" "}
          </Link>{" "}
        </h4>
      </div>
    </div>
  );
};

export default Projects;
