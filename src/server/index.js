import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HomePage from '../containers/HomePage';

const app = express();

// app.get('/client', (req, res, next) => {});

app.use('/client', express.static('dist/client', {}));

app.get('/', (req, res, next) => {
  res.send(`
  <!doctype html>
  <html lang="en">
    <head>
      <style>
        footer {
          color: white;
          background-color: black;
        }
      </style>
    </head>
    <body>
      <div id="container">${ReactDOMServer.renderToString(<HomePage />)}</div>
      <script src="/client/vendors.bundle.js"></script>
      <script src="/client/index.bundle.js"></script>
    </body>
  </html>
  <html>
  `);
});

app.listen(3000, () => {
  console.log('Express server running in http://localhost:3000');
});

export default app;
