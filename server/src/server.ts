import express from 'express'

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  response.json([ 'Diego', 'Cleinto', 'Faran']);
});

app.listen(3333);