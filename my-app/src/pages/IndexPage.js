import React from "react";
import IndexPic1 from "../pic/Index1.jpg";
import IndexPic2 from "../pic/Index2.jpg";
import IndexPic3 from "../pic/Index3.jpg";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="container text-center">
      <nav>
        <div className="menu-icon">
          <i className="fa fa-bars fa-2x" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/" className="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/MyProjects">MyProjects</NavLink>
            </li>
            <li>
              <NavLink to="/MyResumee">MyResumee</NavLink>
            </li>
            <li>
              <NavLink to="/MyLinks">MyLinks</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container text-center">
        <div
          id="home-card"
          className="container bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
            <div className="flex-1 flex flex-col">
              <Carousel interval={3000}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={IndexPic1}
                    alt="Marco Slide 1"
                  />
                  <Carousel.Caption>
                    <h3>About me</h3>
                    {/* <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={IndexPic2}
                    alt="Marco Slide 2"
                  />

                  <Carousel.Caption>
                    <h3>About me</h3>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={IndexPic3}
                    alt="Marco Slide 3"
                  />

                  <Carousel.Caption>
                    <h3>About me</h3>
                    {/* <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p> */}
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col resumeeText">
        <div className="mb-4 text-grey-darker text-sm flex-1">
          <p>Hi, I am Marco, a senior software engineer</p>
          <p>who is living and working in Perth, Australia</p>
        </div>
      </div>

      <div className="container">
        <footer className="center">
          <div className="footer-copyright">
            <div className="container text-center" id="footer">
              <span> © 2021 Copyright</span>
              <br />
              <span>
                {" "}
                My Portfolio powered by React <br />
                <link
                  rel="stylesheet"
                  type="text/css"
                  href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
                />
                Made with <i className="icon ion-heart" /> by Marco
                <a
                  href="https://github.com/marcojansen-gmx/MyPortfolio-powered-by-React"
                  target="blank"
                />
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
