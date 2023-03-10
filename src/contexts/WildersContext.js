import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const WildersContext = createContext({
  wilders: [],
  fetchData: () => {},
});

export function WildersProvider({ children }) {
  const [wilders, setWilders] = useState([]);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:5000/api/wilder");

    setWilders(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <WildersContext.Provider value={{ wilders, fetchData }}>
      {children}
    </WildersContext.Provider>
  );
}

export const useWilders = () => useContext(WildersContext);
