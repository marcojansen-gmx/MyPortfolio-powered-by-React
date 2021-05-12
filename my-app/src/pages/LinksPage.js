import React from "react";
import IndexPic1 from "../pic/Index1.jpg";
import IndexPic2 from "../pic/Index2.jpg";
import IndexPic3 from "../pic/Index3.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export default function LinksPage() {
  return (
    <div className="container text-center">
      <nav>
        <div className="menu-icon">
          <i className="fa fa-bars fa-2x" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/MyProjects">MyProjects</Link>
            </li>
            <li>
              <Link to="/MyResumee">MyResumee</Link>
            </li>
            <li>
              <Link to="/MyLinks" className="active">MyLinks</Link>
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
                    <h3>My Links</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={IndexPic2}
                    alt="Marco Slide 2"
                  />

                  <Carousel.Caption>
                    <h3>My Links</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={IndexPic3}
                    alt="Marco Slide 3"
                  />

                  <Carousel.Caption>
                    <h3>My Links</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col resumeeText">
        <div className="mb-4 text-grey-darker text-sm flex-1">
          <h4>Follow me on these Links</h4>
          <Link
            to="https://www.linkedin.com/in/marco-jansen-0a4122113/"
            target="_blank"
          >
            MyLinkedIn
          </Link>
          <br/><br/>
          <Link to="https://github.com/marcojansen-gmx" target="_blank">
            MyGithub
          </Link>
          <br/><br/>
          <Link to="https://drive.google.com/file/d/1bGVaook0ZRow6wRV-fKKlmubkQCJEK_P/view?usp=sharing" target="_blank">
            MyResumee to download
          </Link>
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
