//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use (express.static (__dirname + '/dist/POne'));


app.get('/*', function (req, res) {
    path.join (__dirname + '/dist /POne/index.html')
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, (err) => {
    if (err) throw err;
    console.log('Server Ok.');
    console.log(__dirname);
});