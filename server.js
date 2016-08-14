var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    api = require('./routes/api');

// -- Middleware -- //


// -- Routes -- //
app.use('/api/v1/', api);
app.get('*', (req, res) => {
  res.send('Test.');
});

// -- Server -- //
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening.');
})

module.exports = app;
