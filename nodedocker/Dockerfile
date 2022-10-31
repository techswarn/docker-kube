#Base image
FROM node:16-alpine

#Install some deps
WORKDIR /usr/app
COPY ./package.json ./
RUN npm install
COPY ./ ./

#Start up command
CMD ["npm", "start"]
