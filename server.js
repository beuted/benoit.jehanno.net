const express = require('express');
const compression = require('compression')
const app = express();

// If an incoming request uses a protocol other than HTTPS,
// redirect that request to the same url but with HTTPS
//const forceSSL = function() {
//  return function (req, res, next) {
//    if (req.headers['x-forwarded-proto'] !== 'https') {
//      return res.redirect(
//       ['https://', req.get('Host'), req.url].join('')
//      );
//    }
//    next();
//  }
//}
// Instruct the app to use the forceSSL middleware
//app.use(forceSSL());

// Gzip middleware
app.use(compression());

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
let port = process.env.PORT || parseInt(process.argv[2], 10) || 8080;
app.listen(port);

console.log('benoit.jehanno.net is running at localhost:' + port);