
const express = require('express')

const app = express()

app.set('view engine', 'html')
app.set('views', 'public')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
})
