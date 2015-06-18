watch: build
	# fswatch is available at https://github.com/emcrisostomo/fswatch
	fswatch -o slides.md | xargs -n1 -I{} make build
	
build:
	cleaver slides.md
