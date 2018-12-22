LABEL=front-test:latest

build:
	sudo docker build -t $(LABEL) .

run:
	sudo docker run -p 8080:80 $(LABEL)

clean-container:
	sudo docker image prune
	sudo docker container prune

clean:
	rm -rf bin

