import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am an AI Engineer with a passion for building production-grade systems that solve real problems at scale. Since graduating from SUTD, I've shipped AI systems used by over
            <i>
              <b className="purple"> 52,000 users </b>
            </i>
            across Southeast Asia, spanning multi-agent investment analysis platforms, voice-to-voice AI training tools, and RAG-based talent intelligence systems.
            <br />
            <br />
            At
            <i>
              <b className="purple"> Temus</b>
            </i>
            , a Temasek &amp; UST joint venture, I work across the full stack of AI delivery — from LLM orchestration and agentic pipelines to cloud infrastructure and frontend interfaces. My work has reduced analyst workflow costs by
            <i>
              <b className="purple"> 40%</b>
            </i>
            , saved
            <i>
              <b className="purple"> 20 hours </b>
            </i>
            of manual effort per week, and supported enterprise clients in finance, insurance, and healthcare.
            <br /><br />
            I'm especially drawn to problems at the intersection of
            <i>
              <b className="purple"> AI and high-stakes domains </b>
            </i>
            like finance and healthcare, where thoughtful engineering actually changes how people work. Outside of my day job, I build personal AI projects, fine-tune models, and explore what's next in agentic systems.
            <br /><br />
            If you're looking for someone who can take an ambiguous problem and ship something real,
            <i>
              <b className="purple"> let's talk.</b>
            </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jsonggan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chin-song/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
