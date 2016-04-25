/* jshint -W079 */
(function() {
    var express = require('express'),
        path = require('path'),
        app = express();

    // port
    app.set('port', (process.env.PORT || 5000));

    // public dir
    app.use('/', express.static(path.join(__dirname, 'public')));

    // index
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'views', 'index.html'));
    });

    var port = app.get('port');

    app.listen(port, function() {
        console.log('Server listening at port ' + port);
    });
})();
