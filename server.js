var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    api = require('./routes/api');

// -- Middleware -- //
app.use(bodyParser.urlencoded({extended:false}))
  .use(bodyParser.json())
  .use(methodOverride('_method'))
  .use(express.static('public'));

// -- Routes -- //
app.use('/api/v1/', api);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html')
});

// -- Server -- //
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening.');
})

module.exports = app;
