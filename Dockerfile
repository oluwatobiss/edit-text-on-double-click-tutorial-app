FROM ubuntu:20.04

RUN apt update &&\
	apt install -y curl git &&\
	curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh &&\
	bash nodesource_setup.sh &&\
	apt install -y nodejs

RUN	git clone https://github.com/oluwatobiss/edit-text-on-double-click-tutorial-app &&\
	cd edit-text-on-double-click-tutorial-app && npm install