// require('dotenv').config();

const server = require('./api/server.js');

const port =  5000; //need this dynamic for heroku
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));


// process.env.PORT ||