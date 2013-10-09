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
	git checkout gh-pages
	mv /report ../report
	git checkout master
	mv ../report report

	@echo "Generate 'plato' Report"
	@node node_modules/.bin/plato --dir report --exclude lib/*.js routes/*.js server.js --title glitxt.api
	# mv report/ ../report
	# @git checkout gh-pages
	# mv ../report /report
	# @git add report
	# @git commit -m "Update report"



testREP:
	@echo "Generate 'plato' Report"
	@node node_modules/.bin/plato --dir report --exclude lib/*.js routes/*.js server.js --title glitxt.api
	mv report/ ../report
	@git checkout gh-pages
	@git add report/
	@git commit -m "Update report"


###
# Push to heroku.
# Pull the last changes and then push to heroku.
###
heroku:
	git pull git@github.com:glitxt/API.git
	git push


.PHONY: run test hint docs report heroku
