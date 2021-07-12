const mongoose = require('mongoose');
const { environment } = require('../config');
const { userSchema } = require('../schema/userSchema');
const env = process.env.NODE_ENV || "development";

mongoose.connect(environment[env].dbString, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', () => {
	console.error("Error while connecting to DB");
});

const Users = mongoose.model('Users', userSchema);

export { Users };