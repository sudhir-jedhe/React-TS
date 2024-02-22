export const fetchData = async () => {
  // Fetch data from API
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
};
