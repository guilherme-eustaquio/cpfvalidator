var app = require("./config/server");
var route = require('./routes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log('server started');
});