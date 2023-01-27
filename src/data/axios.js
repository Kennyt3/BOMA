import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/v2/auto-complete',
  params: {
    q: 'bikini top',
    store: 'US',
    country: 'US',
    currency: 'USD',
    sizeSchema: 'US',
    lang: 'en-US',
  },
  headers: {
    'X-RapidAPI-Key': 'fbf8b32bdamsh37c5e33a5995107p1c6c7cjsn630c80fe874d',
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
  },
}

axios
  .request(options)
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.error(error)
  })
