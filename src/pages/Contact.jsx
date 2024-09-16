import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";

const Contact = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      username: "",
      email: "",
      message: "",
    });
    toast.success("Please select an image!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      bodyClassName: "toastBody",
    });
    // emailjs.send('service_1nm9vte', 'template_25mq4pg', formData, 'bKhrtyB_ad-XQAOLn')
    //   .then((response) => {
    //     console.log(response)
    //     alert('Message sent successfully');
    //   }, (error) => {
    //     console.error('EmailJS Error:', error);
    //     alert('Failed to send message');
    //   });
  };

  return (
    <div id="contact" className="contact-section pt-5 mb-5">
      <div className="container">
        <h1 className=" text-center my-5">
          GET IN <span className="text-warning">TOUCH</span>{" "}
        </h1>
        <div className="row">
          <div className="col-lg-4 col-sm-12 left-contact">
            <h3>Don't Be Shy!</h3>
            <p className="contact-para">
              Feel free to drop in a message.I am always available to discuss
              new projects,creative ideas and turn them into reality.
            </p>
            <h5> Connect with me </h5>
            <p>
              {" "}
              <Link
                to="mailto: mahiraakhter950@gmail.com"
                className="email-link"
              >
                {" "}
                <span className="email">
                  <MdEmail />{" "}
                </span>{" "}
                mahiraakhter950@gmail.com{" "}
              </Link>{" "}
            </p>
            <div className="socials">
              <p className="ms-0">
                <Link
                  to="https://github.com/AsTeriaa09"
                  target="_blank"
                  className="social-links"
                >
                  {" "}
                  <FaGithub />{" "}
                </Link>
              </p>
              <p>
                <Link
                  to="https://www.linkedin.com/in/sultana-rupa-3662a3318/"
                  target="_blank"
                  className="social-links"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </Link>
              </p>
              <p>
                <Link
                  to="http://discordapp.com/users/1255180402310774885"
                  target="_blank"
                  className="social-links"
                >
                  {" "}
                  <FaDiscord />{" "}
                </Link>
              </p>
              <p>
                <Link
                  to="https://www.facebook.com/profile.php?id=100093222772314&mibextid=ZbWKwL"
                  target="_blank"
                  className="social-links"
                >
                  {" "}
                  <FaFacebook />{" "}
                </Link>
              </p>
            </div>
          </div>

          <div className="col-lg-8 right-contact">
            <form onSubmit={handleSubmit}>
              <div className="two-input">
                <div className="me-lg-5 me-0 mb-lg-0 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}

                  />
                </div>
                <div className="mb-3 ms-lg-3 ms-0">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 mt-2">
                <div className="">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <button className="btn btn-outline-warning text-light">
                Send Message{" "}
                <span className="btn-arrow">
                  {" "}
                  <IoIosSend />{" "}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
