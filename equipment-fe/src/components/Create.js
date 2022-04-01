import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

const Create = () => {
  const [address, setAddress] = useState("");
  const [contractStartDate, setContractStartDate] = useState("");
  const [contractEndDate, setContractEndDate] = useState("");
  const [status, setStatus] = useState("Running");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(address, contractEndDate, contractStartDate, status);
    setBtnDisabled(true);
    axios
      .post("/api/equipment", {
        address,
        contractStartDate,
        contractEndDate,
        status,
      })
      .then((resp) => {
        toast.success(`Equipment # ${resp.data.equipmentNumber} created`, {
          position: "bottom-right",
          autoClose: 2000,
        });
        navigate("/equipments", { replace: true });
      })
      .catch((e) => {
        toast.error(`Error creating new equipment`, {
          position: "bottom-right",
          autoClose: 2000,
        });
        console.log(e);
        setBtnDisabled(false);
      });
  };

  return (
    <div style={{ marginLeft: "20%", marginRight: "20%", marginTop: "15px" }}>
      <Form className="mb-3 border border-dark p-5" onSubmit={handlerSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label htmlFor="name" column sm="3">
            Address
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
        <div style={{ margin: "auto", width: 0 }}>
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
