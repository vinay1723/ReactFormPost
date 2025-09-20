import { useState } from "react";
import "./pincodefrom.css";
import Loader from "./Loader";

function PincodeForm({ setPostOffices, pincode, setPincode }) {
  const [errMsg, setErrorMsg] = useState("");
  const [loader, setLoader] = useState(false);

  async function handlePinCode(e) {
    e.preventDefault();

    if (pincode.length < 6 || pincode.length > 6) {
      setErrorMsg("Pincode is not 6 digits");
      return;
    }
    setLoader(true);
    try {
      const res = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );

      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();

      setPostOffices(data[0].PostOffice);
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoader(false);
    }
  }

  if (loader) {
    return <Loader />;
  }

  return (
    <div>
      <form className="pincodeForm" onSubmit={handlePinCode}>
        <label htmlFor="pincode">Enter Pincode</label>
        <input
          type="text"
          placeholder="Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <button type="submit">Lookup</button>
      </form>
      {errMsg && <p id="message">{errMsg}</p>}
    </div>
  );
}

export default PincodeForm;
