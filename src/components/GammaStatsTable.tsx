import wineData from "../data/wineData";

import { calculateGammaStats } from "../services/utils";

const GammaStatsTable = () => {
  const gammaStats = calculateGammaStats(wineData);

  return (
    <div>
      <h2>Gamma Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(gammaStats[1]).map((className) => (
              <th key={className}>{className}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(gammaStats).map(([measure, classStats]) => (
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

export default GammaStatsTable;
