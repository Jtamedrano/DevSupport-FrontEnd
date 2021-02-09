export const msConvertToString = (ms: number) => {
  // takes ms and convers to hours
  let lapseTime: string | number = Math.fround(ms / (1000 * 60 * 60)).toFixed(
    1
  );

  if (parseInt(lapseTime) < 24) {
    if (parseFloat(lapseTime) > 1) {
      lapseTime = parseFloat(lapseTime).toFixed(0); // converts fractional hours to hours
    }
    return `${lapseTime} hour(s) ago`;
  } else {
    lapseTime = Math.round(parseInt(lapseTime) / 24); // Get number of days from hours
    return `${lapseTime} day(s) ago`;
  }
};
