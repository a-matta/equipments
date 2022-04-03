import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import { Container } from "react-bootstrap";
import Equipments from "./components/Equipments";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EquipmentDetail from "./components/EquipmentDetail";

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipments" element={<Equipments />} />
        <Route
          path="/equipments/:equipmentNumber"
          element={<EquipmentDetail />}
        />
        <Route path="/create" element={<Create />} />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </Container>
  );
};

export default App;
