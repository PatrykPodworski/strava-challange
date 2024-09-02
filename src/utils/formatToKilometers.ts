const formatToKilometers = (meters: number) => {
  const kilometers = meters / 1000;
  return `${kilometers.toFixed(2)} km`;
};

export default formatToKilometers;
