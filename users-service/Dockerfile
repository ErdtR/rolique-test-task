FROM node:latest

ADD . /home/service

RUN cd /home/service && npm install

EXPOSE 3000

CMD cd /home/service && npm start