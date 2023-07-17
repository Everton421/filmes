// https://api.themoviedb.org/3/

// https://api.themoviedb.org/3/movie/550? api_key=b5b128dcef2492da021f6f8c079540a0
   import axios from 'axios'

   const api = axios.create({
      baseURL: 'https://api.themoviedb.org/3/'
   });
   export default api;