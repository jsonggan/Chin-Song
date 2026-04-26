import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Engineer",
          "RAG & Multi-Agent Systems",
          "Full-Stack AI Developer",
          "Problem Solver",
          "Fast Learner",
          "Team Player",
          "Shipping Real AI to Production",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
