import React from "react";
import { Container } from "reactstrap";
import "../../styles/common-section.css";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section mb-5">
      <Container className="text-center">
        <h1 className="text-light">{title}</h1>
      </Container>
    </section>
  );
};

export default CommonSection;
