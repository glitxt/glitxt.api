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
	@node node_modules/.bin/jshint server.js routes/ src/

###
# Generate docs.
###
docs:
	#@node node_modules/.bin/subtool --help


###
# Generate report.
###
report:
	@git checkout master
	@rm -rf ${PWD}/report
	@git checkout gh-pages
	@mv ${PWD}/report ${PWD}/../tmpReport
	@git checkout master
	@mv ${PWD}/../tmpReport ${PWD}/report
	
	@echo "Generate 'plato' Report"
	@node node_modules/.bin/plato --dir report --exclude lib/*.js routes/*.js server.js --title glitxt.api

reportPush: report
	@mv ${PWD}/report ${PWD}/../tmpReport
	@git checkout gh-pages
	@rm -rf ${PWD}/report
	@mv ${PWD}/../tmpReport ${PWD}/report
	
	@echo "Add and commit the report changes"
	git add report/index.html
	git add report/report.history.js
	git add report/report.history.json
	git add report/report.js
	git add report/report.json
	git add report/files
	@git commit -m "Update report"
	@git push
	@git checkout master

.PHONY: report reportPush


###
# Push to heroku.
# Pull the last changes and then push to heroku.
###
heroku:
	git pull git@github.com:glitxt/API.git
	git push


.PHONY: run test hint docs report heroku
