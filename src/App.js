import React from "react";
import Routes from "./routes/routes";
import Loader from "./components/loader";
import { useSelector } from "react-redux";

const App = () => {
  const { loader } = useSelector((state) => state.loaderReducer);
  return (
    <div>
      {loader && <Loader />}
      <Routes />
    </div>
  );
};

export default App;
