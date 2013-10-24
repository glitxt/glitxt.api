###
# glitxt.api Makefile
###


COMMON_MAKEFILES_PATH=node_modules/CommonMakefiles
include $(COMMON_MAKEFILES_PATH)/node.make

MOCHA_TIMEOUT = 30000
HINT_DIR = server.js routes/ lib/


test: jshint mocha


###
# Generate docs.
###
docs:
	@echo "\nGenerate the Docs"
	@node_modules/.bin/apidoc --verbose false --input routes/ --output public/docs/
	@echo "Docs Ready!\n"



.PHONY: test docs
