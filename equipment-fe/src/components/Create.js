import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

const Create = () => {
  const [streetAddress, setStreetAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contractStartDate, setContractStartDate] = useState("");
  const [contractEndDate, setContractEndDate] = useState("");
  const [status, setStatus] = useState("Running");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    setBtnDisabled(true);
    axios
      .post("/api/equipment", {
        streetAddress,
        postcode,
        city,
        country,
        contractStartDate,
        contractEndDate,
        status,
      })
      .then((resp) => {
        toast.success(`Equipment # ${resp.data.equipmentNumber} created`);
        navigate("/equipments", { replace: true });
      })
      .catch((e) => {
        toast.error(`Error creating new equipment`);
        console.log(e);
        setBtnDisabled(false);
      });
  };

  return (
    <div className="equipment-detail-container">
      <Form className="mb-3 border border-dark p-5" onSubmit={handlerSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label htmlFor="name" column sm="3">
            Street Address
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="streetAddress"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label htmlFor="name" column sm="3">
            Postcode
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label htmlFor="name" column sm="3">
            City
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label htmlFor="name" column sm="3">
            Country
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label htmlFor="contractStartDate" column sm="3">
            Contract Start Date
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="date"
              name="contractStartDate"
              id="contractStartDate"
              required
              value={contractStartDate}
              onChange={(e) => setContractStartDate(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label htmlFor="contractEndDate" column sm="3">
            Contract End Date
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="date"
              id="contractEndDate"
              name="contractEndDate"
              required
              value={contractEndDate}
              onChange={(e) => setContractEndDate(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label htmlFor="status" column sm="3">
            Status
          </Form.Label>
          <Col sm="9">
            <Form.Select
              name="status"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Running">Running</option>
              <option value="Stopped">Stopped</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <div className="center">
          <Button
            type="submit"
            className="btn btn-primary"
            disabled={btnDisabled}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Create;
