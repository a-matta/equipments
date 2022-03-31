import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import { Container } from "react-bootstrap";
import Equipments from "./components/Equipments";
import "./App.css";

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipments" element={<Equipments />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Container>
  );
};

export default App;
