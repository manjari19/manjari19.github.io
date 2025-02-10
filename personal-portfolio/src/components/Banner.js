import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Computer Science Student", "Kumon Instructor", "Aspiring Web Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150);  // Set fast typing speed
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text, delta]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        // Speed up deletion
        if (isDeleting) {
            setDelta(100);  // Faster deletion speed
        } else {
            setDelta(150);  // Fast typing speed
        }

        // Once full text is typed, switch to deleting phase
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);  // Slow down when pausing after typing
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(150);  // Reset delta to fast typing speed after deletion
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio!</span>
                        <h1>
                            <span>Hi! I'm Manjari Prasad</span>
                            <span className="wrap"><span>{text}</span></span>
                        </h1>
                        <p>
                            ADD ABOUT ME LATER! FRAME IT PROPERLY
                        </p>
                        <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
