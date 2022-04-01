import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Equipments = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("/api/equipment/search").then((resp) => {
      setResults(resp.data);
    });
  }, []);

  if (results.length === 0) {
    return (
      <div
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "15px",
          textAlign: "center",
        }}
      >
        <h1>No Equipments found</h1>
      </div>
    );
  }

  return (
    <div style={{ marginLeft: "10%", marginRight: "10%", marginTop: "15px" }}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Equipment Number</th>
            <th>streetAddress</th>
            <th>postcode</th>
            <th>city</th>
            <th>country</th>
            <th>Contract Start Date</th>
            <th>Contract End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {results.map((p) => {
            return (
              <tr key={p.equipmentNumber}>
                <td>
                  <Link
                    to={`/equipments/${p.equipmentNumber}`}
                    style={{ textDecoration: "none" }}
                  >
                    {p.equipmentNumber}
                  </Link>
                </td>
                <td>{p.streetAddress}</td>
                <td>{p.postcode}</td>
                <td>{p.city}</td>
                <td>{p.country}</td>
                <td>{moment(p.contractStartDate).format("DD-MM-YYYY")}</td>
                <td>{moment(p.contractEndDate).format("DD-MM-YYYY")}</td>
                <td>{p.status}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Equipments;
