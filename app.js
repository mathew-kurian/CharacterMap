/* jshint -W079 */
(function() {
    var scribe = require('scribe-js')(),
        console = process.console,
        express = require('express'),
        path = require('path'),
        app = express();

    console.addLogger('log', 'green');
    console.addLogger('err', 'red');

    // port
    app.set('port', (process.env.PORT || 5000));

    // public dir
    app.use('/', express.static(path.join(__dirname, 'public')));

    // scribe
    app.use(scribe.express.logger());
    app.use('/logs', scribe.webPanel());

    // index
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'views', 'index.html'));
    });

    var port = app.get('port');

    app.listen(port, function() {
        console.time().log('Server listening at port ' + port);
    });
})();
