FROM node:latest

ADD . /home/service

RUN cd /home/service && npm install

EXPOSE 8080

CMD cd /home/service && npm start