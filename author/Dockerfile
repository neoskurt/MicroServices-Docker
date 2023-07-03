FROM node:lts-alpine
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY index-author.js index-author.js
CMD npm run start index-author.js