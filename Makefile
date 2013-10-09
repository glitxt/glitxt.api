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
# Push to heroku.
# Pull the last changes and then push to heroku.
###
heroku:
	git pull git@github.com:glitxt/API.git
	git push


.PHONY: run test docs heroku
