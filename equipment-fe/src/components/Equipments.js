import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Equipments = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("/api/equipment/search").then((resp) => {
      const ArrayList = resp.data;
      console.log(ArrayList);
      setResults(ArrayList);
      ArrayList.map((p) => {
        console.log(p.address);
      });
    });
  }, []);
  // TODO -styling,table center
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Equipment Number</th>
            <th>Address</th>
            <th>Contract Start Date</th>
            <th>Contract End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {results.map((p) => {
            return (
              <tr>
                <td>
                  <Link
                    to={`/equipment/${p.equipmentNumber}`}
                    style={{ textDecoration: "none" }}
                  >
                    {p.equipmentNumber}
                  </Link>
                </td>
                <td>{p.address}</td>
                <td>{p.contractStartDate}</td>
                <td>{p.contractEndDate}</td>
                <td>{p.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Equipments;
