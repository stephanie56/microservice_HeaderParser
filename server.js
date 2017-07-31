const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const language = req.acceptsLanguages("en-US","uk","ru","zh-CN");
  const re = /\(([^)]+)\)/;
  const software = req.headers['user-agent'].match(re)[1];
  const data = {
    ipaddress,
    language,
    software
  };
  res.json(data);
})

app.listen(PORT);
