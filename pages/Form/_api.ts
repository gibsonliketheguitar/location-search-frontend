export async function getPlace(keyword: string, location: string) {
  try {
    const URL = "/api/search";
    const query = `?location=${location}&keyword=${keyword}`;
    const response = await fetch(URL + query);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
