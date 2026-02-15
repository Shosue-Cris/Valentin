const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 10000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Para SPA (Single Page Application) - redirigir todas las rutas a index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
