import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../assets/all-images/toyota-offer-2.png";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" style={{width : "300px"}} />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-titl">Mohammad Asaduzzaman </h2>
            <h4 className="section__title become__driver-title">
            Mohammad Asaduzzaman , the New President of BRAMA is a leading business icon of Bangladesh. Mohammad Asaduzzaman's remarkable business journey since 1983 spans across diverse sectors including Commodity Trading, Banks & Financial Services, Tourism, and Investment Groups, establishing 17 successful enterprises across nine sectors.
            </h4>

            <button className="btn become__driver-btn mt-4">
              Read More
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
