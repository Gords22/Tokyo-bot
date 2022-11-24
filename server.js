const express = require('express');
const server = express();
 
  server.get('/', function (req, res) { 
  res.send('Hello World')
})

function keepAlive(){
server.listen(3000, () => {
  console.log("Server is online!")});
}

module.exports = keepAlive;