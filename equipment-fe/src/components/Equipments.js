import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Equipments = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("/api/equipment/search").then((resp) => {
      setResults(resp.data);
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
              <tr key={p.equipmentNumber}>
                <td>
                  <Link
                    to={`/equipments/${p.equipmentNumber}`}
                    style={{ textDecoration: "none" }}
                  >
                    {p.equipmentNumber}
                  </Link>
                </td>
                <td>{p.address}</td>
                <td>{moment(p.contractStartDate).format("DD-MM-YYYY")}</td>
                <td>{moment(p.contractEndDate).format("DD-MM-YYYY")}</td>
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
