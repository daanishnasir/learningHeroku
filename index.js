require('dotenv').config()

const   express = require('express')

 				, bodyParser = require('body-parser')
 				, app = express()
//				, serverConfig = require("./serverConfig")
//				, session = require("express-session")
// app.use(session(serverConfig.session) );

app.use(bodyParser.json())
app.use("/", express.static(__dirname));







app.listen(process.env.PORT, function() {
  console.log('Server listening on port')
})
