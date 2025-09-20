import { useState } from "react";
import PincodeForm from "./components/PincodeForm";
import PostOfficeDetails from "./components/PincodeDetails";
import "./App.css";

function App() {
  const [postoffices, setPostOffices] = useState([]);
  const [pincode, setPincode] = useState("");
  return (
    <main>
      {postoffices.length === 0 && (
        <PincodeForm
          setPostOffices={setPostOffices}
          pincode={pincode}
          setPincode={setPincode}
        />
      )}
      {postoffices.length > 0 && (
        <PostOfficeDetails Pincode={pincode} postoffices={postoffices} />
      )}
    </main>
  );
}

export default App;
