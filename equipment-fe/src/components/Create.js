import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
        toast(`Equipment # ${resp.data.equipmentNumber} created`);
        navigate("/equipments", { replace: true });
      })
      .catch((e) => {
        toast(`Error creating new equipment`);
        console.log(e);
        setBtnDisabled(false);
      });
  };

  return (
    <form onSubmit={handlerSubmit}>
      <div>
        <label htmlFor="name">Address </label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="contractStartDate">Contract Start Date </label>
        <input
          type="date"
          name="contractStartDate"
          id="contractStartDate"
          required
          value={contractStartDate}
          onChange={(e) => setContractStartDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="contractEndDate">Contract End Date </label>
        <input
          type="date"
          id="contractEndDate"
          name="contractEndDate"
          required
          value={contractEndDate}
          onChange={(e) => setContractEndDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Running">Running</option>
          <option value="Stopped">Stopped</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Submit" disabled={btnDisabled} />
      </div>
    </form>
  );
};

export default Create;
