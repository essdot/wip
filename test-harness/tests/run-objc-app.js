var through = require('through')
var exec = require('child_process').exec
var app_location = '/Users/joeks/Library/Developer/Xcode/DerivedData/sdk-output-guaoijaphwtdxrdjfrhldzuhemfr/Build/Products/Debug/sdk-output'

module.exports = run_objc_app

function run_objc_app() {
	var retVal = {}

	retVal.output = through()

	exec(app_location, function (error, stdout, stderr) {
		// console.log('stdout', stdout)
		// stdout.pipe(retVal.output)
		retVal.output.queue(stdout)
		// retVal.output = stdout
	 //  // output is in stdout
	})

	return retVal
}