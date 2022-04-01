import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

const EquipmentDetail = () => {
  const { equipmentNumber } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`/api/equipment/${equipmentNumber}`).then((resp) => {
      setData(resp.data);
    });
  }, [equipmentNumber]);

  //<table class="table table-sm">
  return (
    <div style={{ marginLeft: "20%", marginRight: "20%", marginTop: "15px" }}>
      <Table bordered size="sm">
        <tbody>
          <tr>
            <td>Equipment Number</td>
            <td>{equipmentNumber}</td>
          </tr>
          <tr>
            <td>Street Address</td>
            <td>{data.streetAddress}</td>
          </tr>
          <tr>
            <td>Postcode</td>
            <td>{data.postcode}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{data.city}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{data.country}</td>
          </tr>
          <tr>
            <td>Contract Start Date</td>
            <td>{moment(data.contractStartDate).format("DD-MM-YYYY")}</td>
          </tr>
          <tr>
            <td>Contract End Date</td>
            <td>{moment(data.contractEndDate).format("DD-MM-YYYY")}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{data.status}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default EquipmentDetail;
