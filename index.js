var app = require('express');
var cms = require('cms');

app.get('/iauth', cms.iauth);
app.listen(3000);