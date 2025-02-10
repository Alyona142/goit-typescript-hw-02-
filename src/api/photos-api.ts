const BASE_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "Hk5v-MEZIfEI8jRYuYncLbFCk64AltZ20GBInwJWu_Q";

interface Photo {
  id: string;
  urls: { regular: string };
  alt_description: string;
}

interface FetchGalleryPhotosResponse {
  total: number;
  total_pages: number;
  results: Photo[];
}

const fetchGalleryPhotos = async (
  query: string,
  page: number
): Promise<FetchGalleryPhotosResponse> => {
  const url = `${BASE_URL}?query=${query}&page=${page}&client_id=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: FetchGalleryPhotosResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
};

export default fetchGalleryPhotos;
