const express = require('express');

const app =  express();

app.get('/', (req, res) => {
  return res.send('hey!')
})

app.listen(3333);