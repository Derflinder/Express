const express = require('express');
const app = express();

const tasks = [
  {
    id: '123456',
    isCompleted: false,
    description: 'Walk the dog',
  },
  // Puedes agregar más tareas aquí si lo deseas
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
