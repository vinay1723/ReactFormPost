import { useState } from "react";
import "./pincodedata.css";

function PostOfficeDetails({ postoffices, Pincode }) {
  const [filteredoffices, setFilteredOffices] = useState(postoffices);
  const [name, setName] = useState("");
  const [errorMsg, setError] = useState(false);
  function handleFilteredOffices(e) {
    setName(e.target.value);
    const newOffices = postoffices.filter((office) =>
      office.Name.toLowerCase().startsWith(e.target.value.toLowerCase())
    );

    if (newOffices.length === 0) {
      setError(true);
    } else {
      setError(false);
    }

    setFilteredOffices(newOffices);
  }

  return (
    <div className="pincode-data">
      <p id="pincode">
        <strong>Pincode:</strong> {Pincode}
      </p>
      <p>
        <strong>Message:</strong> Number of pincode(s) found:{" "}
        {filteredoffices.length}
      </p>
      <div className="items">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="search-icon"
        >
          <path
            d="M29.592 25.9395L23.7498 20.0977C23.4861 19.834 23.1286 19.6875 22.7536 19.6875H21.7985C23.4158 17.6191 24.3768 15.0176 24.3768 12.1875C24.3768 5.45508 18.9213 0 12.1884 0C5.45548 0 0 5.45508 0 12.1875C0 18.9199 5.45548 24.375 12.1884 24.375C15.0187 24.375 17.6204 23.4141 19.6889 21.7969V22.752C19.6889 23.127 19.8354 23.4844 20.0991 23.748L25.9414 29.5898C26.4922 30.1406 27.3829 30.1406 27.9278 29.5898L29.5861 27.9316C30.137 27.3809 30.137 26.4902 29.592 25.9395ZM12.1884 19.6875C8.04551 19.6875 4.68784 16.3359 4.68784 12.1875C4.68784 8.04492 8.03965 4.6875 12.1884 4.6875C16.3313 4.6875 19.6889 8.03906 19.6889 12.1875C19.6889 16.3301 16.3371 19.6875 12.1884 19.6875Z"
            fill="black"
          />
        </svg>

        <input
          type="text"
          placeholder="Filter"
          value={name}
          onChange={handleFilteredOffices}
        />
      </div>
      <div className="pincodesData">
        {filteredoffices.map((office, index) => (
          <OfficeInfo key={index} office={office} />
        ))}
      </div>
      {errorMsg && (
        <p style={{ color: "red" }}>
          Could'nt find the postal data youre looking for
        </p>
      )}
    </div>
  );
}

function OfficeInfo({ office }) {
  return (
    <ul>
      <li>Name: {office.Name}</li>
      <li>Pincode: {office.Pincode}</li>
      <li>District: {office.District}</li>
      <li>State: {office.State}</li>
    </ul>
  );
}

export default PostOfficeDetails;
