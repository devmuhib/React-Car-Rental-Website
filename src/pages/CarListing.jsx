import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const CarListing = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = async () => {
    try {
      const result = await axios.get("http://localhost:8080/cars");
      setCars(result.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      // Handle the error appropriately in your application
    }
  };

  return (
    <section>
      <Helmet title="Car Listing" />
      <CommonSection title="Car Listing" />

      <Container>
        <Row>
          <Col lg="12">
            <div className="mb-5">
              {/* Additional components or sorting features can be added here */}
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>model</th>
                  <th>year</th>
                  <th>PlateId</th>
                  <th>Status</th>
                  {/* Add more table headers based on the Car object properties */}
                </tr>
              </thead>
              <tbody>
                {cars.map((car, index) => (
                  <tr key={car.carId}>
                    <td>{car.carId}</td>
                    <td>{car.model}</td>
                    <td>{car.year}</td>
                    <td>{car.plateId}</td>
                    <td>{car.status}</td>
                    {/* Add more table data based on the Car object properties */}
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CarListing;