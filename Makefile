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
test:
	@echo "Test the Server"
	@node node_modules/.bin/mocha --timeout 30000 --reporter spec


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
	@node node_modules/.bin/plato --dir report --exclude lib/*.js routes/*.js server.js --title glitxt.api


###
# Push to heroku.
# Pull the last changes and then push to heroku.
###
heroku:
	git pull git@github.com:glitxt/API.git
	git push


.PHONY: run test docs heroku
