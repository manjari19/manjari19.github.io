import meter30 from "../assets/img/meter30.svg";
import meter50 from "../assets/img/meter50.svg";
import meter70 from "../assets/img/meter70.svg";
import meter80 from "../assets/img/meter80.svg";
import meter90 from "../assets/img/meter90.svg";
import meter100 from "../assets/img/meter100.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>These skills reflect my technical proficiency, problem-solving abilities, and experience working in various environments, from academic projects to community service. I am continuously developing these skills to tackle real-world challenges and contribute to innovative solutions.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter80} alt="Image" />
                                <h5>Programming Languages</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter70} alt="Image" />
                                <h5>Problem-Solving</h5>
                            </div>
                            <div className="item">
                                <img src={meter100} alt="Image" />
                                <h5>Tutoring</h5>
                            </div>
                            <div className="item">
                                <img src={meter90} alt="Image" />
                                <h5>Organizational Skills</h5>
                            </div>
                            <div className="item">
                                <img src={meter90} alt="Image" />
                                <h5>Community Engagement</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
  }