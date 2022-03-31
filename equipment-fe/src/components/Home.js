import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      TODO This is work done by amrita. to see equipments click
      <Link to="/equipments" style={{ textDecoration: "none" }}>
        here
      </Link>
    </Container>
  );
};

export default Home;
