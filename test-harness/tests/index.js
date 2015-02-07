var test = require('tape')
var run_objc_app = require('./run-objc-app')
var test_obj

test('matches objc app output with JS output', function(t) {

	var obj_app = run_objc_app()

	obj_app.output.on('data', function(data) {
		t.deepEqual(JSON.parse(data), test_obj)
		t.end()
	})
})

test_obj = {
	"hello": "hi",
	"obj": {
		"thing": [1, 2, 3, 4],
		"otherThing": {}
	}
}
