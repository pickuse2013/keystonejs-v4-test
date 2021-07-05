var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'test';
	req.session.customUserId = "testUserId"
	res.write("test route\n");
	res.write(`locals.customUserId, ${req.session.customUserId}\n`);
	console.log(`access test route`);
	res.end();
	//view.render('')
	// Render the view
	//view.render('index');
};
