const express = require('express')
const app = express()
const port = 3000


let users = [
    {
        "username": "billy5555",
        "email": "billy555@myemail.com",
        "picture": "http://s3.amazonaws.com/[bucket_name]/ http://[bucket_name].s3.amazonaws.com/",
        "user_since": "05-22-2023",
        "games_played": 148,
        "games_won": 88,
        "all_time_total_score": 8624
      },
      {
        "username": "billy4444",
        "email": "billy4444@myemail.com",
        "picture": "http://s3.amazonaws.com/[bucket_name]/ http://[bucket_name].s3.amazonaws.com/",
        "user_since": "05-22-2023",
        "games_played": 148,
        "games_won": 88,
        "all_time_total_score": 8624
      },
      {
        "username": "billy9999",
        "email": "billy@myemail.com",
        "picture": "http://s3.amazonaws.com/[bucket_name]/ http://[bucket_name].s3.amazonaws.com/",
        "user_since": "05-22-2023",
        "games_played": 148,
        "games_won": 88,
        "all_time_total_score": 8624
      },


]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get( '/users', (req, res) => {
    res.json(users)
} )

// app.get( '/login/user-login', (req, res) => {
//     res.json(users)
// } )

// app.get('/randomNum', (req, res, next) => {
//   axios.get('http://www.random.org/integers/', { params: {num: 4, min: 0, max: 7, rnd: 'new', base: 10, col: 1, format: 'plain'}})
//     .then(function (response) {
//       if (response.data) {
//         Game.create({ solution: response.data })
//           .then((data) => res.json(data))
//           .catch(next);
//       } else {
//         res.json({
//           error: 'Missing random numbers'
//         })
//       }
//     })
//     .catch(function (error) {
//       console.log(error)
//     })
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})