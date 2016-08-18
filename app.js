const express = require('express'),
      path = require('path'),
      logger = require('morgan');
      compression = require('compression');

const app = express();

// Serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));

// Send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Middleware
// app.use('/', express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

// Run application
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log('React starter is running on port ' + PORT + '!');
});
