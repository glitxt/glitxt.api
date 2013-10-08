###
# The glitxt.api Makefile
###


run:
	@node server.js


test:
	@echo "Test the Server"
	@node node_modules/.bin/mocha --timeout 30000 --reporter spec


docs:
	@node node_modules/.bin/subtool --help

heroku:
	git pull git@github.com:glitxt/API.git
	git push

.PHONY: run test docs heroku
