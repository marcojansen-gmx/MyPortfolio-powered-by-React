import React from "react";
import IndexPic1 from "../pic/Index1.jpg";
import IndexPic2 from "../pic/Index2.jpg";
import IndexPic3 from "../pic/Index3.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export default function ResumeePage() {
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
              <Link to="/MyResumee" className="active">MyResumee</Link>
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
                  <img
                    className="d-block w-100"
                    src={IndexPic1}
                    alt="Marco Slide 1"
                  />
                  <Carousel.Caption>
                    <h3>My Resumee</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={IndexPic2}
                    alt="Marco Slide 2"
                  />

                  <Carousel.Caption>
                    <h3>My Resumee</h3>
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
                    <h3>My Resumee</h3>
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
          <h4>I am a senior software engineer at TMA technologies since 2011</h4>
          <br />
          <p>Education:</p>
          <p>1987 – 1991 Kath. Grundschule Untereicken</p>
          <p>1991 – 1999 Gymnasium am Geroweiher</p>
          <p>1999 – 2000 Bundeswehr Grundwehrdienst (military duty)</p>
          <p>
            Since 09/01/2000 -02/28/2004 apprenticeship (communication
            technician – field IT)
          </p>
          <p>
            03/01/2004 – 02/28/2005 additional training (hotline service
            technician -parking systems)
          </p>
          <br />
          <p>
            03/01/2005 – 12/31/2007 hotline service technician international
          </p>
          <br />
          <p>Projects and Responsiblilities:</p>
          <p>-Port of Portland (Oregon, US, Airport) upgrade</p>
          <p>-Several Installations all over Europe and the US</p>
          <p>-Hotline Support International (US, Australia, Asia, Europe)</p>
          <br />
          <p>01/01/2008 - senior field technician – Devision Baltimore</p>
          <br />
          <p>Projects and Responsiblilities:</p>
          <p>
            -Entervo upgrade of the City of Wilmington, including 8 Garages and
            a database server/management computer system
          </p>
          <p>
            -Service of over 30 Garages in Maryland, Delaware, Pennsylvannia and
            Virginia
          </p>
          <p>
            -Installation of multiple Garages in Washington, DC, Baltimore, MD
            and Bryn Mawr, PA
          </p>
          <br />
          <p>Since 01/01/2010 hotline service technichian (east coast)</p>
          <br />
          <p>Projects and Responsiblilities:</p>
          <p>
            -Upgrading the City of Baltimore to Entervo including 16 Garages
            with a management computer/database server system
          </p>
          <p>-Hotline Support for the entire East Coast</p>
          <br />
          <p>Final examinations:</p>
          <p>intermediate high school certificate</p>
          <p>finished apprenticeship</p>
          <br />
          <p>Languages:</p>
          <p>German fluently</p>
          <p>English fluently</p>
          <p>Latin</p>
          <br />
          <p>Qualifications:</p>
          <p>
            Webdevelopment with Javascript, mySql, React, Node and many other
            technologies
          </p>
          <p>specialized knowledge of</p>
          <p>Microsoft/ Windows</p>
          <p>Oracle database handling</p>
          <p>Scheidt &amp; Bachmann specific programs for parking system</p>
          <p>and network administration</p>
          <p>Project managment training</p>
          <br />
          <p>Hobbies</p>
          <br />
          <p>Middle-earth strategy game, Minecraft, soccer, Beach activities</p>
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
