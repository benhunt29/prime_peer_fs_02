var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET users listing. */
router.get('/:id?', function(req, res, next) {
	var id = req.params.id;
	var file = path.join(__dirname, '../models/images.json');
	fs.readFile(file, 'utf8', function (err, data) {
		if(err) {
			next(err);
		}else {
			var obj = JSON.parse(data);
			var images = [];

			if(!id) {// return 5 images
				for(var i = 0; i < 5; i++) {
					images[i] = obj[i];
				}
			}else {// look for the requested image
				obj.forEach(function (elem) {
					if(elem.id == id) {
						images = elem;
					}
				});
			}
			res.json(images);
		}
	});
});

module.exports = router;
