export const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    headers: {
      'X-RapidAPI-Key': `${process.env.REACT_APP_CITIES_KEY}`,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };