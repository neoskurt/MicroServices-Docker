FROM node:lts-alpine
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY index-category.js index-category.js
CMD npm run start index-category.js