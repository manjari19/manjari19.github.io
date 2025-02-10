import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "..assets/img/headerImg.svg"

export const Banner = () => {
    const[loopNum, setLoopNum]= useState(0);
    const [isDeleting, setIsDeleting]= useState(false);
    const toRotate =["Computer Science Student", "Kumon Instructor", "Aspiring Web Devloper"];
    const [text, setText]= useState('')
    const period= 2000;
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio!</span>
                        <h1>{`Hi I'm webdecoded`}<span className="wrap">web developer</span></h1>
                        <p>
                            ADD ABOUT ME LATER! FRAME IT PROPERLY
                        </p>
                        <button onClick={()=>console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={} alt="Header image" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}