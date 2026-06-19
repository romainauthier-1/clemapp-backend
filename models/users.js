const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	name: String,
	password: String,
	token: String,
	status: {
		type: String,
		enum: [
			"star",
			"guest",
			"guest+",
			"guest-",
			"demo",
			"demo-admin",
			"demo-star",
		],
	},
	subscription: { type: Object, default: null },
	isLinus: { type: Boolean, default: false },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
