import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EquipmentDetail = () => {
  const { equipmentNumber } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`/api/equipment/${equipmentNumber}`).then((resp) => {
      setData(resp.data);
    });
  }, [equipmentNumber]);

  return (
    <div>
      {equipmentNumber}
      {data.address}
      {moment(data.contractStartDate).format("DD-MM-YYYY")}
      {moment(data.contractEndDate).format("DD-MM-YYYY")}
      {data.status}
    </div>
  );
};

export default EquipmentDetail;
