###
# glitxt.api Makefile
###


COMMON_MAKEFILES_PATH=node_modules/CommonMakefiles
include $(COMMON_MAKEFILES_PATH)/index.make
include $(COMMON_MAKEFILES_PATH)/node/all.make

MOCHA_TIMEOUT = 30000
HINT_DIR = server.js routes/ lib/


###
# Run the Server.
###
run:
	@node server.js


###
# Generate docs.
###
docs:
	$(PRINT) "\nGenerate the Docs"
	@node_modules/.bin/apidoc --verbose false --input routes/ --output public/docs/
	$(PRINT) "Docs Ready!\n"


###
# Generate report.
###
report:
	@echo "Generate 'plato' Report"
	@node node_modules/.bin/plato --dir report --exclude lib/*.js lib/api.js routes/*.js server.js --title glitxt.api
	
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
