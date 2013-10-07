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


.PHONY: run test docs
