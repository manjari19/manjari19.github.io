import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.jpeg";
import projImg3 from "../assets/img/project-img3.jpeg";
import projImg4 from "../assets/img/project-img4.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Flight Booking and Management",
      description: "A Python and MySQL-based flight booking system with a Tkinter GUI, enabling user authentication, flight availability checks, and seamless ticket booking.",
      imgUrl: projImg1,
    },
    {
      title: "Automated Job Checker with Alerts",
      description: "A python-based web scraper uses Selenium and BeautifulSoup to automate job checking on a website, logging in, extracting table data, and sending SMS alerts via Twilio when new records are found",
      imgUrl: projImg2,
    },
    {
      title: "Weather app",
      description: "A sleek and user-friendly web app that fetches real-time weather data via the OpenWeather API, allowing users to check temperature, humidity, and wind speed for any city.",
      imgUrl: projImg3,
    },
    {
      title: "Memory Game",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Flags Game",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "To-Do List",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore my diverse projects, showcasing my skills and passions in various fields. From coding projects that demonstrate my technical expertise to creative outlets like poetry and music, each project reflects my dedication to learning and growth. Dive into the world of:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Coding Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Poetry Corner</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Piano Covers</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}