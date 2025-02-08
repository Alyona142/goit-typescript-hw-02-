const BASE_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "Hk5v-MEZIfEI8jRYuYncLbFCk64AltZ20GBInwJWu_Q";

const fetchGalleryPhotos = async (query, page) => {
  const url = `${BASE_URL}?query=${query}&page=${page}&client_id=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
};

export default fetchGalleryPhotos;
