import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png"; // Example image for coding projects
import projImg2 from "../assets/img/project-img2.jpeg"; // Example image for coding projects
import projImg3 from "../assets/img/project-img3.jpeg"; // Example image for coding projects
import projImg4 from "../assets/img/project-img4.jpeg"; // Example image for coding projects
import projImg5 from "../assets/img/project-img5.jpeg"; // Example image for coding projects
import 'animate.css';
import TrackVisibility from 'react-on-screen';

//Video importing
import video1 from "../assets/videos/arabesque.MOV";
import video3 from "../assets/videos/family-line.mov";
import video2 from "../assets/videos/young-and-beautiful.mov";

export const Projects = () => {

  //coding projects
  const codingProjects = [
    {
      title: "Flight Booking and Management",
      description: "A Python and MySQL-based flight booking system with a Tkinter GUI, enabling user authentication, flight availability checks, and seamless ticket booking.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/manjari19/flight-tracker"
    },
    {
      title: "Automated Job Checker with Alerts",
      description: "A Python-based web scraper using Selenium and BeautifulSoup to automate job checking, logging in, extracting table data, and sending SMS alerts via Twilio.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/manjari19/web-scraping"
    },
    {
      title: "Weather App",
      description: "A sleek and user-friendly web app that fetches real-time weather data via the OpenWeather API, allowing users to check temperature, humidity, and wind speed for any city.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/manjari19/weather-app"
    },
    {
      title: "Memory Game",
      description: "A fun and interactive memory matching game built with JavaScript and React. Players flip cards to find matching pairs while testing their memory and concentration. Features include a timer, score tracking, and multiple difficulty levels.",
      imgUrl: projImg4,
      githubUrl: "https://github.com/manjari19/memory-game"
    },
    {
      title: "Flags Game",
      description: "An educational web-based game that challenges players to match country flags with their corresponding names. Built using React and integrated with an API for fetching country data, this game is a great way to improve geographic knowledge.",
      imgUrl: projImg5,
      githubUrl: "https://github.com/manjari19/flags-game"
    },
    {
      title: "To-Do List",
      description: "A simple and efficient to-do list application that helps users manage tasks and stay organized. Built using React with local storage support, users can add, delete, and mark tasks as completed, ensuring productivity on the go.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/manjari19/to-do-list"
    },
  ];
  

  // Poetry Section
  const poetry = [
    { 
      title: "Chamapgne Problems (rewrite)", 
      description: `Your absence hurts me and the silence roars
Don't know how much longer I can go
I'm freezing in this cold while thinking
Keep that flannel I don't need it.

My hero complex your unhealed scars
All gone with you in your getaway car
I believed in 'forever and always'
And now we're here going our own ways

I'm alone in the bar, drinking up my pride
I wish you gave me way more signs
Sometimes you just don't know the answer
But now I wish, I'd never asked you` 
    },
    { 
      title: "I Will Never Stop", 
      description: `I am afraid to look into your eyes
Lest I never be able to admire the stars again
I am fearful of your embrace
Then home may lose all other meaning
I am scared to slumber beside you
How could I ever close my eyes with your face in front of mine?
And I do not want to hear the sound of your voice
For no other melody may satisfy my ears again
And I will not write pretty poems for you
Because my pen may cease to speak about anything else

And I shall absolutely never fall in love with you
For I know I will never stop` 
    },
    { 
      title: "21st of January", 
      description: `My past glares back at me 
Memories of that day, burning in my head 
21st January 1988 
The night for which my tears never shed

I'm dragged back to my youth 
Naive old me, who never knew
The dangers and tortures that life presents 
Instantaneously, a feeling of love played its cue

I was captivated, like a bee to a flower
If only I had known, the stings are more predominant
You pushed me further and further down
Until my grim future became more prominent

You were there at my lowest,
Like a knight in shining armor
But it was your sword that dug the scars in my hand
And I held on to my sanity, like a ship to its anchor

The night reels itself back to me
Even when I try to keep it far away from my mind
Your nails digging into my skin
Your alcohol-infused breath
Screaming at me
Telling me to run away
But I stand still, holding on to the remnants of the past
Solely and only because I was not ready to let go

But the dreaded day had arrived
The day I decided we draw the finish line
The pocket knife you had given me to protect myself
I had used it against you, solely for that purpose

The handcuffs enveloped my blood-soaked wrists
The sirens rang loudly, but my heart thumped louder
The city stood with fear while a smile crept on my face
I finally tasted freedom.
Freedom that I hadn't felt in years.

A loud noise brings me back to the present
Another young lady with blood-soaked wrists entered my cell 
I finally feel like I've entered my personal hell.`
    }
  ];

  //piano covers
 const pianoCovers = [
    { 
      title: "Arabesque No.1",
      description: "A delicate and flowing piano composition by Debussy.", 
      videoSrc: video1 
    },
    { 
      title: "Young and Beautiful", 
      description: "A hauntingly melancholic piano cover of Lana Del Rey’s song", 
      videoSrc: video2 
    },
    { 
      title: "Family Line", 
      description: "A deeply emotional piano interpretation of Conan Gray’s song", 
      videoSrc: video3 
    }
  ];
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Explore my diverse projects, showcasing my skills and passions in various fields. From coding projects that demonstrate my technical expertise to creative outlets like poetry and music, each project reflects my dedication to learning and growth. Dive into the world of:
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Coding Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Piano Covers</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Poetry Corner</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {/* Coding Projects Tab */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {codingProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      
                      {/* Poetry Corner Tab (With Line Breaks) */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {poetry.map((poem, index) => (
                            <Col key={index} md={4}>
                              <div className="poetry-card">
                                <h5>{poem.title}</h5>
                                <p className="poetry-text">
                                  {poem.description.split("\n").map((line, i) => (
                                    <span key={i}>
                                      {line}
                                      <br />
                                    </span>
                                  ))}
                                </p>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      {/* Piano Covers Tab */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {pianoCovers.map((cover, index) => (
                            <Col key={index} md={4}>
                              <div className="video-card">
                                <h5>{cover.title}</h5>
                                <p className="video-description">{cover.description}</p>
                                <video controls width="100%">
                                  <source src={cover.videoSrc} type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
