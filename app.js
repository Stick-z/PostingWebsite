const input = document.querySelector("input");
const button = document.querySelector("button");
const output = document.querySelector("#p2");

button.addEventListener("click", () => {
  var value = input.value.split(",");
  value = value.map(x => Number(x));
  var mean = getMean(value);
  console.log(mean);
  var stdDev = getSD(value, mean);
  console.log(stdDev);
  output.innerHTML = `Mean: ${mean}, Standard Deviation: ${stdDev}`
});

const getMean = arr => {
  return arr.reduce((x, y) => x + y, 0) / arr.length;
};

const getSD = function (arr, avg) {
  var numerator = arr.reduce((x, y) => x + Math.pow(y - avg, 2), 0)
  let SD = Math.sqrt(numerator / arr.length);
  return SD;
};
