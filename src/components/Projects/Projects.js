import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import singpass from "../../Assets/Projects/singpass.png";
import dbs from "../../Assets/Projects/dbs.jpg";
import ocbc from "../../Assets/Projects/ocbc.jpg";
import dnata from "../../Assets/Projects/dnata.png";
import fronthausEventApp from "../../Assets/Projects/fronthausEventApp.png";
import resico from "../../Assets/Projects/resico.png";
import empathiq from "../../Assets/Projects/empathiq.png";
import irb from "../../Assets/Projects/irb.png";
import aia from "../../Assets/Projects/aia.png";
import rmo from "../../Assets/Projects/rmo.png";
import jarvis from "../../Assets/Projects/jarvis.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jarvis}
              isBlog={false}
              title="Multi-Agent Investment Analysis · Temasek"
              description="Architected a production-grade RAG-based multi-agent investment analysis platform for Temasek (OpenAI Agents SDK, AWS Bedrock Claude 3.5) with persistent memory, Perplexity web search, and SharePoint integration; reduced analyst workflow time costs by 40%."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rmo}
              isBlog={false}
              title="AI-Driven Talent Intelligence Platform"
              description="Designed and productionised an internal RAG-based talent-matching and skill-gap analysis platform (LLM CV parsing, FastAPI, Next.js, AWS Bedrock, PostgreSQL vector DB, Celery, CI/CD); saved 20 hours/week of manual review effort."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aia}
              isBlog={false}
              title="AIA Voice AI Sales Training Platform"
              description="Owned end-to-end design, deployment, and production operations of a voice-to-voice AI sales training platform used by 52,000+ AIA agents across Thailand (Terraform, Kubernetes on Azure, FastAPI, Next.js, Azure OpenAI, Azure Speech)."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={irb}
              isBlog={false}
              title="IRB Process Digitalisation"
              description="Digitalized the IRB process with a multi-role Next.js web portal and MySQL database, automating workflows to cut process time by 78%, deployed securely with Docker on-prem."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={empathiq}
              isBlog={false}
              title="EmpathIQ – Healthcare Communication AI Coach · TTSH"
              description="Led a 5-person Agile team to develop a Spring Boot–React AI application simulating doctor-patient communication, integrating Kafka, LLMs, ElevenLabs, Docker, and AWS for Tan Tock Seng Hospital. Awarded 2nd Place in the Design AI Award (80+ projects), presented by President Tharman Shanmugaratnam."
              demoLink="https://empathiq-sg.com/"
              youtubeLink="https://www.youtube.com/watch?v=9J7fu8V7UfE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={singpass}
              isBlog={false}
              title="Spot the Differences"
              description="The Spot the Differences game for Singpass aims to educate seniors in preventing scam applications."
              ghLink="https://github.com/jsonggan"
              demoLink="https://avpd.holo.sg/game/dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dbs}
              isBlog={false}
              title="DBS CX Day"
              description="A series of games that engage 5,000+ users and allow them to learn more about DBS."
              ghLink="https://github.com/jsonggan"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ocbc}
              isBlog={false}
              title="Frank by OCBC"
              description="A real-time updating web app that receives user card designs and displays them with elegant animations."
              ghLink="https://github.com/jsonggan"
              demoLink="https://frank.holo.sg/card"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dnata}
              isBlog={false}
              title="News Aggregator"
              description="The Automated News Collector and Management Web App, aims to streamline the process of identifying and managing relevant news articles for dnata employees. The web application automates the retrieval of industry-specific articles from diverse sources, categorizing, summarizing, and facilitates seamless collaboration within the team."
              ghLink="https://github.com/Service-Design-Studio/1d-final-project-2023-sds-2023-team-06"
              demoLink="https://sites.google.com/mymail.sutd.edu.sg/sud-avengers/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fronthausEventApp}
              isBlog={false}
              title="Event Application"
              description="Designed architecture of the mobile app for event attendees so that the app can be easily customized for different events."
              ghLink="https://github.com/jsonggan/fronthaus"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resico}
              isBlog={false}
              title="ResiCo"
              description="Connecting communities together by digitalizing residential notice boards and providing an easier way for residents to talk, ask, and help each other."
              ghLink="https://github.com/jsonggan/ResiCo"
              demoLink="https://www.linkedin.com/feed/update/urn:li:activity:7110657925282463744/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
