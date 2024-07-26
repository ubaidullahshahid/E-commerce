/* eslint-disable react/prop-types */
import { useState } from "react";
import myContext from "./MyContext";

function MyState({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <myContext.Provider value={{ loading, setLoading }}>
      {children}
    </myContext.Provider>
  );
}

export default MyState;
