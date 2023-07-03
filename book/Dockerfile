FROM node:lts-alpine
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY index-book.js index-book.js
CMD npm run start index-book.js