import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

// create context provider
export const OrgContext = createContext();

// create context provider
export const OrgProvider = ({ children }) => {
  const [spots, setSpots] = useState([]);
  const [orgById, setOrgById] = useState([]);
  const [userSpot, setUserSpot] = useState();
  const [error, setError] = useState(null);

  // get all organizations
  useEffect(() => {
    return axios.get('/get-org')
      .then(response => {
        let res = (response.data)
        console.log('RES', res)
        // setSpots(res)
      }).catch(error => setError(error));
  }, []);

  // get organization by id
  const getOrgById = (id) => {
    axios.get(`/get-org/${id}`)
      .then(res => setOrgById(res.data))
      .catch(error => console.log(error));
  };

  // user selection
  const userSpotData = async (data) => {
    setUserSpot(data);
    console.log('setup', data);
  }

  // api response from positionstack
  const [payload, setPayload] = useState([]);

  const geoData = async (data) => {
    Object.keys(data).map((i) =>
      setPayload(data[i])
    );
  }

  const values = { spots, error, orgById, userSpot, payload, geoData, getOrgById, userSpotData }

  return (
    <OrgContext.Provider value={values}>
      {children}
    </OrgContext.Provider>
  );
};

// use context
export const useOrgContext = () => useContext(OrgContext);