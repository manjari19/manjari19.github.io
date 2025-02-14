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
                        I am a Computer Science student at Simon Fraser University with a strong interest in software development and community service. With experience in tutoring, volunteer work, and journalism, I have developed skills in problem-solving, organization, and teamwork. I am fluent in English, Malayalam, and Tamil, with professional proficiency in Japanese and basic French.

I am passionate about applying my technical knowledge to real-world challenges while continuously growing as a developer. I'm eager to contribute to projects that enhance user experience and solve meaningful problems.
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};