export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "5f05ba1d25mshf8a8d6ccc21f6e6p1e4ac0jsn263879edde86",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers,
    }
  );

  const result = await response.json();
  return result;
}
