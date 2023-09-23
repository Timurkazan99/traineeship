import fetch from "../mocks/fetch.js";

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const fetchWithCatch = async (attempt) => {
      try {
        resolve(await fetch(url))
      } catch (error) {
        if(attempt < 4) {
          await fetchWithCatch(attempt + 1)
        } else {
          reject(error)
        }
      }
    };

    fetchWithCatch(0);
  })
}

export default fetchUrl;