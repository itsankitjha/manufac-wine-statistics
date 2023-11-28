// @ts-ignore

export function calculateFlavanoidsStats(data) {
  const classWiseFlavanoids = {};

  data.forEach((item) => {
    const { Alcohol, Flavanoids } = item;
    if (!classWiseFlavanoids[Alcohol]) {
      classWiseFlavanoids[Alcohol] = [];
    }
    classWiseFlavanoids[Alcohol].push(Flavanoids);
  });

  const stats = {};
  for (const [className, flavanoidsList] of Object.entries(
    classWiseFlavanoids
  )) {
    const mean = calculateMean(flavanoidsList);
    const median = calculateMedian(flavanoidsList);
    const mode = calculateMode(flavanoidsList);

    stats[className] = { mean, median, mode };
  }

  return stats;
}

function calculateMean(data) {
  const sum = data.reduce((acc, value) => acc + value, 0);
  return sum / data.length;
}

function calculateMedian(data) {
  const sortedData = data.slice().sort((a, b) => a - b);
  const middle = Math.floor(sortedData.length / 2);
  return sortedData.length % 2 === 0
    ? (sortedData[middle - 1] + sortedData[middle]) / 2
    : sortedData[middle];
}

function calculateMode(data) {
  const countMap = {};
  data.forEach((value) => {
    countMap[value] = (countMap[value] || 0) + 1;
  });

  let mode;
  let maxCount = 0;
  for (const [value, count] of Object.entries(countMap)) {
    if (Number(count) > maxCount) {
      mode = parseFloat(value); // @ts-ignore
      maxCount = count;
    }
  }

  return mode;
}

export function calculateGammaStats(data) {
  const classWiseGamma = {};

  data.forEach((item) => {
    const { Alcohol, Ash, Hue, Magnesium } = item;
    const gamma = (Ash * Hue) / Magnesium;

    if (!classWiseGamma[Alcohol]) {
      classWiseGamma[Alcohol] = [];
    }
    classWiseGamma[Alcohol].push(gamma);
  });

  const stats = {};
  for (const [className, gammaList] of Object.entries(classWiseGamma)) {
    const mean = calculateMean(gammaList);
    const median = calculateMedian(gammaList);
    const mode = calculateMode(gammaList);

    stats[className] = { mean, median, mode };
  }

  return stats;
}
