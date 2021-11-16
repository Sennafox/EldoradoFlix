
const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();

const server = app.listen(4000, () => {
  console.log(`Server listening on port ${server.address().port}`);
});

app.get('/', (_, res)=>{
    res.send('hi')
})

const fetchMovies = async (page) => {
    try {
      let result;
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/550?api_key=7afef708d9a76377be7967f18b11eb84`
        )
        .then((response) => {
          result = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
      return result;
    } catch (error) {
      console.error(error);
    }
  };

app.get('/movies', async (req, res, next)=>{
    try {
        const {page} = req.query;
        const data = await fetchMovies(page);

        return res.status(200).json({
          status:200,
          message: `[${data.length}] movies found`, 
          data
        })
      } catch (err) {
        return next(err);
      }
})