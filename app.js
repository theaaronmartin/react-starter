const express = require('express'),
      path = require('path'),
      logger = require('morgan');

const app = express();

// Middleware
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

// Run application
app.listen(3001, function() {
  console.log('React starter is running!');
});
