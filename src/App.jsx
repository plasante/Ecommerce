import {useEffect, useState} from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import {getRoutes} from "./router/routes";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  useEffect(() => {
    const route = getRoutes();
    setAllRoutes(prev => [...prev, route]);
  }, []);

  return <Router allRoutes={allRoutes}/>
}

export default App;
