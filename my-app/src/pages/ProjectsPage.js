import React from "react";
import ProjectsPic1 from "../pic/project1.png";
import ProjectsPic2 from "../pic/project2.png";
import ProjectsPic3 from "../pic/project3.png";
import ProjectsPic4 from "../pic/project4.png";
import ProjectsPic5 from "../pic/project5.png";
import ProjectsPic6 from "../pic/project6.png";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
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
              <Link to="/MyProjects" className="active">
                MyProjects
              </Link>
            </li>
            <li>
              <Link to="/MyResumee">MyResumee</Link>
            </li>
            <li>
              <Link to="/MyLinks">MyLinks</Link>
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
                <Link to="//https://dashboard.heroku.com/apps/who-let-the-dogs-out-1" target="_blank">Project 2 Dog Playdates
                    <img
                      className="d-block w-100"
                      src={ProjectsPic1}
                      alt="Project Slide 1"
                      />
                      </Link>
                    <Carousel.Caption>
                      <h3>Project Dog Playdate app</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                <Link to="//https://fitness-tracker-with-mongo-db.herokuapp.com/?id=605abfd0c7f3590015f448d6" target="_blank">Fitness tracker
                    <img
                      className="d-block w-100"
                      src={ProjectsPic2}
                      alt="Project Slide 2"
                    />
                    <Carousel.Caption>
                      <h3>Fitness Tracker with MongoDB</h3>
                    </Carousel.Caption>
                </Link>
                  </Carousel.Item>
                  <Carousel.Item>
                <Link to="//https://burgerhomework19878.herokuapp.com/" target="_blank">Burger app
                    <img
                      className="d-block w-100"
                      src={ProjectsPic3}
                      alt="Project Slide 3"
                    />
                    <Carousel.Caption>
                      <h3>Burger app with Express Handlebars</h3>
                    </Carousel.Caption>
                </Link>
                  </Carousel.Item>
                  <Carousel.Item>
                <Link to="//https://github.com/marcojansen-gmx/EmployeeInfoNodeApplication" target="_blank">Employee Info
                    <img
                      className="d-block w-100"
                      src={ProjectsPic4}
                      alt="Project Slide 4"
                    />
                    <Carousel.Caption>
                      <h3>Employee information tool Node application</h3>
                    </Carousel.Caption>
                </Link>
                  </Carousel.Item>
                  <Carousel.Item>
                <Link to="//https://marcojansen-gmx.github.io/Project-1-LotrOPotterQuiz/" target="_blank">Project Quiz
                    <img
                      className="d-block w-100"
                      src={ProjectsPic5}
                      alt="Project Slide 5"
                    />
                    <Carousel.Caption>
                      <h3>Project 1 Quiz</h3>
                    </Carousel.Caption>
                </Link>
                  </Carousel.Item>
                  <Carousel.Item>
                <Link to="//https://marcojansen-gmx.github.io/WeatherAppWithAPIs/" target="_blank">Weather App
                    <img
                      className="d-block w-100"
                      src={ProjectsPic6}
                      alt="Project Slide 6"
                    />
                    <Carousel.Caption>
                      <h3>Weather App with APIs</h3>
                    </Carousel.Caption>
                </Link>
                  </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col resumeeText">
        <div className="mb-4 text-grey-darker text-sm flex-1">
          <h4>Click on the images to get more details on my Projects</h4>
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
