const express = require('express')
const app = express()

const axios = require('axios')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/foods/:name', (req, res) => {
  const url = `https://api.edamam.com/api/food-database/parser?app_id=a38ceffd&app_key=
  5a2673f24dec2c6c909fae39324e56a6=${req.params.name}`
  axios.get(url)
    .then(response => {
      if (!response.data.hints.length) {
        return res.send({
          error: 'No food found'
        })
      }
      res.send(JSON.stringify(response.data.hints))
    })
    .catch(error => res.sendStatus(error.response.status))
})

app.listen(3000, () => {
  console.log('Back-end listening on port 3000')
})