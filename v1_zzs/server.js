const express = require('express')

const app = express()

app.set('view engine', 'html')
app.set('views', 'public')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('yaddadamean listening on 3000::');
})
