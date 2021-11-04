import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

// create context provider
const OrgContext = createContext();

// create context provider
export const OrgProvider = ({ children }) => {
  const [spots, setSpots] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/get-org')
      .then(response => {
        let res = (response.data)
        setSpots(res)
      }).catch(error => setError(error));
  }, []);

  return (
    <OrgContext.Provider value={{ spots, error }}>
      {children}
    </OrgContext.Provider>
  );
};

// use context
export const useOrgContext = () => useContext(OrgContext);