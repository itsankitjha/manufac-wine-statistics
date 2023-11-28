// @ts-ignore
import React from "react";
import FlavanoidsStatsTable from "./components/FlavanoidsStatsTable";
import GammaStatsTable from "./components/GammaStatsTable";

const App = () => {
  return (
    <div>
      <h1>Wine Statistics</h1>
      <FlavanoidsStatsTable />
      <GammaStatsTable />
    </div>
  );
};

export default App;
