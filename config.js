
exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://admin:admin@ds113670.mlab.com:13670/node-restaurants-app-mongoose-tests';
exports.TEST_DATABASE_URL = (
	process.env.TEST_DATABASE_URL ||
	'mongodb://admin:admin@ds113670.mlab.com:13670/node-restaurants-app-mongoose-tests');
exports.PORT = process.env.PORT || 8080;