import wineData from "../data/wineData";

import { calculateFlavanoidsStats } from "../services/utils";

const FlavanoidsStatsTable = () => {
  const flavanoidsStats = calculateFlavanoidsStats(wineData);

  return (
    <div>
      <h2>Flavanoids Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(flavanoidsStats[1]).map((className) => (
              <th key={className}>{className}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(flavanoidsStats).map(([measure, classStats]) => (
            <tr key={measure}>
              <td>Class {measure}</td>
              {Object.values(classStats).map((stat, index) => (
                <td key={index}>{stat.toFixed(3)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlavanoidsStatsTable;
