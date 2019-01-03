LABEL=front-test:latest

build:
	sudo docker build -t $(LABEL) .

run:
	sudo docker run --rm -p 38080:80 $(LABEL)

clean-container:
	sudo docker image prune
	sudo docker container prune

clean:
	rm -rf bin

check:
	curl http://localhost:8080/
