.PHONY: build serve

build:
		docker build -t mdxprograms/node-docker .

serve:
	docker run -p 80:3000 -d mdxprograms/node-docker
