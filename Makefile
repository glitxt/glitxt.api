###
# glitxt.api Makefile
###


###
# Run the Server.
###
run:
	@node server.js


###
# Test it.
###
test: hint
	@echo "Test the Server"
	@node node_modules/.bin/mocha --timeout 30000 --reporter spec


###
# Hint task.
###

hint:
	@node node_modules/.bin/jshint server.js routes/ lib/

###
# Generate docs.
###
docs:
	#@node node_modules/.bin/subtool --help


###
# Generate report.
###
report:
	@echo "Generate 'plato' Report"
	@node node_modules/.bin/plato --dir report --exclude lib/*.js lib/apiModel.js routes/*.js server.js --title glitxt.api
	
reportPush: report
	@git checkout gh-pages
	@git pull https://github.com/glitxt/glitxt.api.git
	@echo "Add and commit the report changes"
	git add report/
	@git commit -m "Update /report directory - ${date}"
	#@git push
	#@git checkout master

.PHONY: report reportPush


###
# Push to heroku.
# Pull the last changes and then push to heroku.
###
heroku:
	git pull git@github.com:glitxt/glitxt.api.git
	git push


.PHONY: run test hint docs report heroku
