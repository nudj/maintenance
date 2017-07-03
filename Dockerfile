FROM node:6.11.0-alpine
RUN mkdir -p /usr/src
WORKDIR /usr/src
COPY src /usr/src
RUN npm i --production
EXPOSE 80
CMD node .
